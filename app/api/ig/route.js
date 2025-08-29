// app/api/ig/route.js

export async function GET(request) {
  try {
    const token = process.env.IG_TOKEN;
    const userId = process.env.IG_USER_ID;
    const fields =
      process.env.IG_FIELDS ||
      "id,caption,media_url,permalink,thumbnail_url,media_type,timestamp,children{media_type,media_url}";

    if (!token || !userId) {
      // fallback demo items so UI never crashes
      const sample = Array.from({ length: 8 }, (_, i) => ({
        id: String(i + 1),
        caption: `Tattoo #${i + 1}`,
        media_url: `/ph-${(i % 6) + 1}.svg`,
        permalink: "#",
        media_type: "IMAGE",
      }));
      return Response.json({ data: sample });
    }

    const url =
      `https://graph.facebook.com/v23.0/${userId}/media` +
      `?fields=${encodeURIComponent(fields)}` +
      `&access_token=${encodeURIComponent(token)}`;

    const res = await fetch(url, { next: { revalidate: 300 } });
    const json = await res.json();

    // Normalize media for frontend use
    const normalized = Array.isArray(json?.data)
      ? json.data.map((item) => {
          let mediaUrl = item.media_url;

          // If it's a video, prefer thumbnail_url
          if (item.media_type === "VIDEO" && item.thumbnail_url) {
            mediaUrl = item.thumbnail_url;
          }

          // If it's a carousel, pick first image child
          if (
            item.media_type === "CAROUSEL_ALBUM" &&
            item.children?.data?.length
          ) {
            const firstImg =
              item.children.data.find((c) => c.media_type === "IMAGE") ||
              item.children.data[0];
            if (firstImg?.media_url) mediaUrl = firstImg.media_url;
          }

          return {
            id: item.id,
            caption: item.caption,
            permalink: item.permalink,
            media_type: item.media_type,
            media_url: mediaUrl,
          };
        })
      : [];

    return Response.json({ data: normalized });
  } catch (err) {
    console.error("Instagram API error:", err);
    return Response.json({ data: [], error: String(err) }, { status: 200 });
  }
}
