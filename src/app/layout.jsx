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
  title: 'Anime Lens - Photoshoot Site',
  description:
    'Anime Lens is an anime-themed photoshoot website with cinematic galleries, cosplay-inspired visual styles, and story-driven photography sections.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`active ${recoletaFont.variable} ${gorditaFont.variable}`}>{children}</body>
    </html>
  );
}
