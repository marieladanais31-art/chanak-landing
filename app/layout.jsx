import Script from "next/script";
import CookieBanner from "../components/CookieBanner";

export const metadata = {
  title: "Chanak International Academy | Off-Campus y Dual Diploma",
  description: "Landing page de Chanak International Academy para familias interesadas en Off-Campus y Dual Diploma.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>
        {children}
        <CookieBanner />
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18109980849"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'AW-18109980849');
            gtag('config', 'GT-NSSXS5N6');
          `}
        </Script>
      </body>
    </html>
  );
}
