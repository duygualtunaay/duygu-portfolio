import "../globals.css";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import type {ReactNode} from "react";

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: "tr" | "en" };
}) {
  const {locale} = params;

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
