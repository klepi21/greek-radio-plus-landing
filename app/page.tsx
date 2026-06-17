import Image from 'next/image';
import Link from 'next/link';

const FEATURES = [
  {
    icon: '📻',
    title: '114 Σταθμοί',
    desc: 'Όλα τα μεγάλα ελληνικά ραδιόφωνα σε μία εφαρμογή. Από Αθήνα μέχρι Κρήτη.',
  },
  {
    icon: '🎵',
    title: 'Live Streaming',
    desc: 'Άκου σε πραγματικό χρόνο, χωρίς καθυστέρηση. Υψηλή ποιότητα ήχου.',
  },
  {
    icon: '❤️',
    title: 'Αγαπημένα',
    desc: 'Αποθήκευσε τους σταθμούς που αγαπάς για γρήγορη πρόσβαση.',
  },
  {
    icon: '🔍',
    title: 'Έξυπνη Αναζήτηση',
    desc: 'Βρες σταθμό κατά όνομα, πόλη, συχνότητα ή κατηγορία.',
  },
  {
    icon: '🗺️',
    title: 'Ανά Περιοχή',
    desc: 'Εξερεύνησε ραδιόφωνα ανά περιφέρεια — Αττική, Θεσσαλονίκη, Κρήτη και άλλες.',
  },
  {
    icon: '🌙',
    title: 'Sleep Timer',
    desc: 'Ρύθμισε χρονοδιακόπτη 15, 30 ή 60 λεπτών. Κοιμήσου στον ρυθμό σου.',
  },
  {
    icon: '🕐',
    title: 'Πρόσφατα',
    desc: 'Γρήγορη πρόσβαση στους σταθμούς που άκουσες πρόσφατα.',
  },
  {
    icon: '🔒',
    title: 'Lock Screen Controls',
    desc: 'Έλεγχος αναπαραγωγής από την κλειδωμένη οθόνη και το Control Center.',
  },
];

const STATS = [
  { value: '114', label: 'Σταθμοί' },
  { value: '12+', label: 'Περιφέρειες' },
  { value: '20+', label: 'Κατηγορίες' },
  { value: '100%', label: 'Δωρεάν' },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-bg-primary/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/icon.png" alt="Greek Radio+" width={32} height={32} className="rounded-lg" />
          <span className="font-bold text-lg">Greek Radio+</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          <a href="#features" className="hover:text-white transition-colors">Χαρακτηριστικά</a>
          <a href="#download" className="hover:text-white transition-colors">Κατέβασε</a>
          <Link href="/privacy" className="hover:text-white transition-colors">Απόρρητο</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Όροι</Link>
        </div>
        <a
          href="#download"
          className="bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Κατέβασε Τώρα
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-accent-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left — text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-bg-card border border-white/10 rounded-full px-4 py-2 text-sm text-text-secondary mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live τώρα • 114 σταθμοί
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Όλη η Ελλάδα<br />
            <span className="gradient-text">Ακούει Live</span>
          </h1>

          <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-md">
            114 ελληνικά ραδιόφωνα από κάθε γωνιά της χώρας. Δωρεάν, χωρίς εγγραφή, με εξαιρετική ποιότητα ήχου.
          </p>

          <div id="download" className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="flex items-center gap-3 bg-white text-black font-semibold px-6 py-3 rounded-2xl hover:bg-gray-100 transition-colors group"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <div className="text-xs leading-none mb-0.5 opacity-70">Διαθέσιμο στο</div>
                <div className="text-base leading-none">App Store</div>
              </div>
            </a>
          </div>

          <p className="text-text-muted text-sm mt-5">
            Δωρεάν • iOS • Χωρίς εγγραφή
          </p>
        </div>

        {/* Right — app icon + floating elements */}
        <div className="flex items-center justify-center relative">
          <div className="relative animate-float">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-accent-primary to-accent-secondary opacity-30 blur-xl scale-110" />
            <Image
              src="/icon.png"
              alt="Greek Radio+ App"
              width={260}
              height={260}
              className="relative rounded-[48px] shadow-2xl glow"
            />
          </div>

          {/* Floating cards */}
          <div className="absolute top-0 -left-8 bg-bg-card border border-white/10 rounded-2xl px-4 py-3 shadow-xl hidden md:block">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm font-semibold">LIVE</span>
            </div>
            <p className="text-xs text-text-secondary mt-1">Μέντα 88.0</p>
          </div>

          <div className="absolute bottom-8 -right-8 bg-bg-card border border-white/10 rounded-2xl px-4 py-3 shadow-xl hidden md:block">
            <p className="text-xs text-text-secondary">❤️ Αγαπημένο</p>
            <p className="text-sm font-semibold mt-0.5">Kiss FM 92.9</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="border-y border-white/5 bg-bg-card/30">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl font-black gradient-text mb-2">{s.value}</div>
            <div className="text-text-secondary text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            Γιατί να επιλέξεις το <span className="gradient-text">Greek Radio+</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Σχεδιάστηκε για να ακούς ελληνικό ραδιόφωνο με τον καλύτερο τρόπο.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-bg-card card-border rounded-3xl p-6 hover:border-white/20 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-base mb-2">{f.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10" />
      </div>
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <div className="w-20 h-20 mx-auto mb-8">
          <Image src="/icon.png" alt="Greek Radio+" width={80} height={80} className="rounded-[20px] shadow-xl glow" />
        </div>
        <h2 className="text-4xl font-black mb-4">
          Κατέβασε το <span className="gradient-text">τώρα</span>
        </h2>
        <p className="text-text-secondary text-lg mb-10">
          Διαθέσιμο δωρεάν για iPhone. Χωρίς εγγραφή, χωρίς συνδρομή.
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="flex items-center justify-center gap-3 bg-white text-black font-semibold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors text-lg"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-black flex-shrink-0">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: 'Πόσα ραδιόφωνα έχει το Greek Radio+;',
    a: '114 ελληνικούς ραδιοφωνικούς σταθμούς από όλη την Ελλάδα — από την Αθήνα μέχρι την Κρήτη.',
  },
  {
    q: 'Είναι δωρεάν;',
    a: 'Ναι, εντελώς δωρεάν. Δεν χρειάζεται εγγραφή, δεν υπάρχει συνδρομή.',
  },
  {
    q: 'Σε ποιες πλατφόρμες είναι διαθέσιμο;',
    a: 'iOS (iPhone). Έκδοση Android σύντομα.',
  },
  {
    q: 'Μπορώ να ακούω με κλειδωμένη οθόνη;',
    a: 'Ναι. Υποστηρίζει πλήρη αναπαραγωγή στο background και έλεγχο από το Control Center / Lock Screen.',
  },
  {
    q: 'Τι είναι ο sleep timer;',
    a: 'Χρονοδιακόπτης που σταματά αυτόματα τη μουσική μετά από 15, 30 ή 60 λεπτά.',
  },
  {
    q: 'Χρειάζεται σύνδεση στο internet;',
    a: 'Ναι, απαιτείται σύνδεση για live streaming. Η εφαρμογή σε ειδοποιεί αυτόματα όταν χάσεις σύνδεση.',
  },
];

function FaqSection() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black mb-3">Συχνές Ερωτήσεις</h2>
          <p className="text-text-secondary">Ό,τι θέλεις να ξέρεις για το Greek Radio+</p>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group bg-bg-card border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-colors"
            >
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-semibold text-sm md:text-base select-none">
                {faq.q}
                <span className="ml-4 flex-shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-xs group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-text-secondary text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/icon.png" alt="Greek Radio+" width={28} height={28} className="rounded-lg" />
            <span className="font-bold">Greek Radio+</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <Link href="/privacy" className="hover:text-white transition-colors">Πολιτική Απορρήτου</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Όροι Χρήσης</Link>
            <a href="mailto:kolepidas@gmail.com" className="hover:text-white transition-colors">Επικοινωνία</a>
          </div>
          <p className="text-text-muted text-sm">© {new Date().getFullYear()} Greek Radio+. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <DownloadSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
