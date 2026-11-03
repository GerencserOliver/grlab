import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  let locale = cookieStore.get('NEXT_LOCALE')?.value;

  if (!locale || !['hu', 'en'].includes(locale)) {
    locale = 'hu';
  }

  // Legal copy (privacy policy + consent strings) lives in its own file so
  // it can be reviewed/updated independently of the marketing copy.
  const [base, legal] = await Promise.all([
    import(`../../messages/${locale}.json`),
    import(`../../messages/legal.${locale}.json`),
  ]);

  return {
    locale,
    messages: { ...base.default, ...legal.default }
  };
});
