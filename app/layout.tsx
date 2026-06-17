import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://greekradio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Greek Radio+ | 114 Ελληνικά Ραδιόφωνα Live',
    template: '%s | Greek Radio+',
  },
  description:
    'Άκου 114 ελληνικά ραδιόφωνα live, δωρεάν. Ανακάλυψε σταθμούς ανά περιοχή και κατηγορία, αποθήκευσε αγαπημένα, sleep timer, lock screen controls. Διαθέσιμο για iPhone.',
  keywords: [
    // Core
    'greek radio',
    'ελληνικό ραδιόφωνο',
    'greek radio app',
    'ελληνικά ραδιόφωνα',
    'greek radio online',
    'ραδιόφωνο online',
    'ραδιόφωνο live',
    'live radio greece',
    'radio streaming greece',
    'greek radio streaming',
    // Geo — mirror competitor ranking terms
    'ραδιόφωνο Αθήνα',
    'ραδιόφωνο Θεσσαλονίκη',
    'ραδιόφωνο Κρήτη',
    'athens radio live',
    'thessaloniki radio',
    // Genre — high-traffic long-tail
    'greek hits radio',
    'ελληνικά χιτ ραδιόφωνο',
    'laiko radio greece',
    'λαϊκά ραδιόφωνο',
    'greek news radio',
    'σκοπός ραδιόφωνο',
    'rock radio greece',
    // App-specific — no competitor targets these
    'εφαρμογή ραδιοφώνου',
    'greek radio app ios',
    'greek radio app iphone',
    'ραδιόφωνο δωρεάν',
    'listen greek radio free',
    'greek radio plus',
    'greek radio+',
  ],
  authors: [{ name: 'Greek Radio+', url: BASE_URL }],
  creator: 'Greek Radio+',
  publisher: 'Greek Radio+',
  category: 'music',
  openGraph: {
    title: 'Greek Radio+ | 114 Ελληνικά Ραδιόφωνα Live',
    description: 'Άκου 114 ελληνικά ραδιόφωνα live, δωρεάν. Διαθέσιμο για iPhone.',
    type: 'website',
    url: BASE_URL,
    siteName: 'Greek Radio+',
    locale: 'el_GR',
    images: [
      {
        url: '/splash.png',
        width: 1200,
        height: 630,
        alt: 'Greek Radio+ — 114 Ελληνικά Ραδιόφωνα',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greek Radio+ | 114 Ελληνικά Ραδιόφωνα Live',
    description: 'Άκου 114 ελληνικά ραδιόφωνα live, δωρεάν. Διαθέσιμο για iPhone.',
    images: ['/splash.png'],
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/icon.png',
    shortcut: '/icon.png',
  },
  alternates: {
    canonical: BASE_URL,
    languages: { 'el-GR': BASE_URL },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MobileApplication',
      '@id': `${BASE_URL}/#app`,
      name: 'Greek Radio+',
      description:
        '114 ελληνικά ραδιόφωνα live σε μία εφαρμογή. Ανακάλυψε σταθμούς ανά περιοχή και κατηγορία.',
      url: BASE_URL,
      image: `${BASE_URL}/icon.png`,
      applicationCategory: 'MusicApplication',
      operatingSystem: 'iOS',
      inLanguage: 'el',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        ratingCount: '1',
      },
      featureList: [
        '114 ελληνικά ραδιόφωνα',
        'Live streaming',
        'Αγαπημένοι σταθμοί',
        'Αναζήτηση κατά περιοχή',
        'Sleep timer',
        'Lock screen controls',
        'Offline detection',
        'Χωρίς εγγραφή',
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#org`,
      name: 'Greek Radio+',
      url: BASE_URL,
      logo: `${BASE_URL}/icon.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'kolepidas@gmail.com',
        contactType: 'customer support',
        availableLanguage: ['Greek', 'English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Greek Radio+',
      publisher: { '@id': `${BASE_URL}/#org` },
      inLanguage: 'el-GR',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${BASE_URL}/#software`,
      name: 'Greek Radio+',
      applicationCategory: 'MusicApplication',
      applicationSubCategory: 'Radio Streaming',
      operatingSystem: 'iOS 15+',
      url: BASE_URL,
      image: `${BASE_URL}/icon.png`,
      description:
        'Εφαρμογή για live streaming 114 ελληνικών ραδιοφωνικών σταθμών. Δωρεάν για iPhone.',
      inLanguage: 'el',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      keywords:
        'greek radio, ελληνικό ραδιόφωνο, live radio greece, ελληνικά ραδιόφωνα, greek radio streaming',
    },
    {
      '@type': 'BroadcastService',
      '@id': `${BASE_URL}/#broadcast`,
      name: 'Greek Radio+ Live Streaming',
      broadcaster: { '@id': `${BASE_URL}/#org` },
      broadcastDisplayName: 'Greek Radio+',
      inLanguage: 'el',
      broadcastAffiliateOf: {
        '@type': 'Organization',
        name: 'Ελληνικά Ραδιόφωνα',
      },
      description:
        'Live streaming 114 ελληνικών ραδιοφωνικών σταθμών μέσω της εφαρμογής Greek Radio+.',
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Πόσα ραδιόφωνα έχει το Greek Radio+;',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Το Greek Radio+ περιλαμβάνει 114 ελληνικούς ραδιοφωνικούς σταθμούς από όλη την Ελλάδα.',
          },
        },
        {
          '@type': 'Question',
          name: 'Είναι δωρεάν το Greek Radio+;',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ναι, το Greek Radio+ είναι εντελώς δωρεάν. Δεν απαιτείται εγγραφή ή συνδρομή.',
          },
        },
        {
          '@type': 'Question',
          name: 'Σε ποιες πλατφόρμες είναι διαθέσιμο το Greek Radio+;',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Το Greek Radio+ είναι διαθέσιμο για iPhone (iOS). Έκδοση Android σύντομα.',
          },
        },
        {
          '@type': 'Question',
          name: 'Μπορώ να ακούω ραδιόφωνο με κλειδωμένη οθόνη;',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ναι, το Greek Radio+ υποστηρίζει αναπαραγωγή με κλειδωμένη οθόνη και έλεγχο μέσω Control Center.',
          },
        },
        {
          '@type': 'Question',
          name: 'Έχει το Greek Radio+ sleep timer;',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ναι, μπορείς να ρυθμίσεις χρονοδιακόπτη 15, 30 ή 60 λεπτών για αυτόματη διακοπή.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
