import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: false,
  partialPrefetching: false,
  reactCompiler: true,
  // The About and Privacy pages moved to English slugs: keep old links, bookmarks and
  // search-engine entries working with permanent (301) redirects.
  async redirects() {
    return [
      { source: '/rolunk', destination: '/about', permanent: true },
      { source: '/adatkezelesi-tajekoztato', destination: '/privacy-policy', permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default withNextIntl(nextConfig);
