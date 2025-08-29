export default function sitemap() {
    const base = 'https://newschooltattoo.com'; // update on deploy
    const now = new Date().toISOString();
    return [
      { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
      { url: `${base}/gallery`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
      { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ];
  }
  