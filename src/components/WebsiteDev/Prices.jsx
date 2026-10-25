import { getTranslations, getMessages } from 'next-intl/server';
import Link from 'next/link';

const Prices = async () => {
  const t = await getTranslations('wdprices');
  const messages = await getMessages();
  const packages = ['basic', 'pro', 'premium'];

  return (
    <section className="flex items-center justify-center bg-[#f5f7f4]">
      <div className="scroll-in container mx-auto flex max-w-360 flex-col px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">{t('eyebrow')}</p>
          <h2 className="font-poppins text-3xl font-extrabold leading-tight text-[#102a2d] md:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#315b5d] md:text-xl">
            {t('description')}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 scroll-in sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((packageType) => {
            const features = messages?.wdprices?.[packageType]?.features || [];
            return (
              <div
                key={packageType}
                className={`flex h-full flex-col justify-between rounded-2xl border p-7 ${
                  packageType === 'basic'
                    ? 'border-[#0f766e] bg-[#102a2d]'
                    : packageType === 'pro'
                    ? 'border-[#dfe7e1] bg-white'
                    : 'border-[#102a2d] bg-[#0f766e]'
                }`}
              >
                <div>
                  <h2
                    className={`${
                      packageType === 'basic' || packageType === 'premium'
                        ? 'text-white'
                        : 'text-black'
                    } font-bold font-poppins text-3xl md:text-4xl`}
                  >
                    {t(`${packageType}.title`)}
                  </h2>
                  <hr className="block border-gray-300 mt-3 mb-3" />
                  <p
                    className={`font-poppins font-bold text-xl md:text-2xl mb-6 md:text-left ${
                      packageType === 'basic' || packageType === 'premium'
                        ? 'text-white'
                        : 'text-black'
                    }`}
                  >
                    {t(`${packageType}.description`)}
                  </p>
                  <hr className="block border-gray-300 mt-3 mb-3" />
                  <ul className="list-inside list-disc">
                    {Array.isArray(features) &&
                      features.map((feature, index) => (
                        <li
                          key={index}
                          className={`font-poppins text-lg md:text-xl mt-3 ${
                            packageType === 'basic' || packageType === 'premium'
                              ? 'text-white'
                              : 'text-black'
                          }`}
                        >
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>
                <Link href="/contact" className="mt-6 block w-full rounded-full bg-orange-700 px-6 py-3 text-center font-poppins text-base font-bold text-white transition-colors hover:bg-orange-800">
                  {t('requestQuote')}
                </Link>
              </div>
            );
          })}
        </div>
        <p className="text-teal-700 font-poppins text-sm md:text-lg mb-6 mt-12 md:text-left">
          {t('note')}
        </p>
      </div>
    </section>
  );
};

export default Prices;
