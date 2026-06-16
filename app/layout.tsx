import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Greek Radio+ | 114 Ελληνικά Ραδιόφωνα',
  description: 'Άκου 114 ελληνικά ραδιόφωνα live, δωρεάν. Ανακάλυψε σταθμούς ανά περιοχή, κατηγορία, αποθήκευσε αγαπημένα και πολλά άλλα.',
  keywords: 'greek radio, ελληνικό ραδιόφωνο, greek radio app, ραδιόφωνο, live radio greece',
  authors: [{ name: 'Greek Radio+' }],
  openGraph: {
    title: 'Greek Radio+ | 114 Ελληνικά Ραδιόφωνα',
    description: 'Άκου 114 ελληνικά ραδιόφωνα live, δωρεάν.',
    type: 'website',
    images: [{ url: '/splash.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greek Radio+',
    description: 'Άκου 114 ελληνικά ραδιόφωνα live, δωρεάν.',
    images: ['/splash.png'],
  },
  icons: { icon: '/icon.png', apple: '/icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
