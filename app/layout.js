import './globals.css';
import LangProvider from '@/components/LangProvider';
import BackToTop from '@/components/backToTop';

export const metadata = {
  metadataBase: new URL("https://newschool-tattoo.vercel.app"),
  title: "New School Tattoo – Силистра",
  description:
    "⏰Запиши час още сега!⏰ 💬Пиши ни за Безплатна консултация! 💬",
  keywords: [
    "tattoo studio Silistra",
    "татуировки Силистра",
    "студио за татуировки",
    "New School Tattoo",
    "tattoo Silistra",
    "tattoo studio",
    "тату студио",
    "татуировка Силистра",
    "татуист Силистра",
    "тату Силистра",
    "tattoo artist Silistra",
    "Силистра",
    "татуировки",
    "татуировка",
    "тату",
    "татуист",
    "татусалони",
    "татуировки цени",
    "татуировки снимки",
    "татуировки идеи",
    "татуировки мъже",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://newschool-tattoo.vercel.app",
    title: "New School Tattoo – Силистра",
    description:
      "⏰ Запиши час още сега⏰ 💬 Пиши ни за Безплатна консултация! 💬",
    siteName: "New School Tattoo",
    images: [
      {
        url: "/og-image.jpg", // направи хубаво preview изображение
        width: 1200,
        height: 630,
        alt: "Tattoo Studio Silistra – New School Tattoo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New School Tattoo – Силистра",
    description: "⏰ Запиши час още сега⏰ 💬 Пиши ни за Безплатна консултация💬",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://newschool-tattoo.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body>
        <LangProvider>
          {children}
          <BackToTop />
        </LangProvider>
      </body>
    </html>
  );
}
