export async function GET() {
    return new Response(
      `User-agent: *
  Allow: /
  
  Sitemap: hhttps://newschool-tattoo.vercel.app/sitemap.xml
  `,
      {
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );
  }
  