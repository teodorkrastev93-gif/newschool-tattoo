import './globals.css';
import LangProvider from '@/components/LangProvider';
import BackToTop from '@/components/backToTop';

export const metadata = {
  title: 'NewSchool Tattoo',
  description: 'Tattoo Studio – Modern style, creativity, and hygiene.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'manifest',
      url: '/site.webmanifest',
    },
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
