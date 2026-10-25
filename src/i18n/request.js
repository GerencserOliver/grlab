import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  let locale = cookieStore.get('NEXT_LOCALE')?.value;

  if (!locale || !['hu', 'en'].includes(locale)) {
    locale = 'hu';
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});