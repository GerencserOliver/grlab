import { posts } from '../../../content/blog';

const SITE_URL = 'https://www.grlab.hu';

// Generated from content/blog/index.js, so a new post appears here automatically.
export const dynamic = 'force-static';

export function GET() {
  const latest = posts.reduce(
    (max, post) => ((post.updatedAt ?? post.publishedAt) > max ? (post.updatedAt ?? post.publishedAt) : max),
    '1970-01-01',
  );

  const entries = [
    { loc: `${SITE_URL}/blog`, lastmod: latest, changefreq: 'weekly', priority: '0.7' },
    ...posts.map((post) => ({
      loc: `${SITE_URL}/blog/${post.slug}`,
      lastmod: post.updatedAt ?? post.publishedAt,
      changefreq: 'monthly',
      priority: '0.6',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
}
