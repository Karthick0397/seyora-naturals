import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import Cursor from '@/components/Cursor';
import SeyoraMotion from '@/components/SeyoraMotion';

const cormorant = Cormorant_Garamond({
  variable: '--serif',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jost = Jost({
  variable: '--sans',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Seyora Naturals — Rooted in Tradition. Made for Today.',
  description:
    'Skincare and rituals drawn from generations of Indian botanical wisdom — distilled into objects of quiet, everyday luxury.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body data-hero="cinematic" data-cursor="custom">
        <Cursor />
        {children}
        <SeyoraMotion />
      </body>
    </html>
  );
}
