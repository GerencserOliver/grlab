import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  let locale = cookieStore.get('NEXT_LOCALE')?.value;

  if (!locale || !['hu', 'en'].includes(locale)) {
    locale = 'hu';
  }

  // Messages are split by concern so they can be edited independently:
  //   <locale>.json        marketing / page copy
  //   legal.<locale>.json  privacy policy + consent strings
  //   blog.<locale>.json   blog UI + 404 page strings (blog post bodies live in content/blog)
  //   trust.<locale>.json  pricing, reviews, About page, response promise (prices/quotes live in content/)
  const [base, legal, blog, trust] = await Promise.all([
    import(`../../messages/${locale}.json`),
    import(`../../messages/legal.${locale}.json`),
    import(`../../messages/blog.${locale}.json`),
    import(`../../messages/trust.${locale}.json`),
  ]);

  return {
    locale,
    messages: { ...base.default, ...legal.default, ...blog.default, ...trust.default }
  };
});
