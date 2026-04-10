import './index.css';
import { Inter, Playfair_Display } from 'next/font/google';

const recoletaFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--ff-recoleta',
});

const gorditaFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--ff-gordita',
});

export const metadata = {
  title: 'Anikesh Kumar - Full Stack Developer Portfolio',
  description:
    'Portfolio of Anikesh Kumar, a full stack developer building scalable web apps with Next.js, TypeScript, AI integrations, and modern cloud tooling.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`active ${recoletaFont.variable} ${gorditaFont.variable}`}>{children}</body>
    </html>
  );
}
