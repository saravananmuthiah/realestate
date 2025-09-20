import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, type Locale } from '../../../i18n/request';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  const validLocale = locale && locales.includes(locale as Locale) ? locale : 'en';

  // Load messages for the current locale
  const messages = await getMessages({ locale: validLocale });

  return (
    <NextIntlClientProvider messages={messages} locale={validLocale}>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}