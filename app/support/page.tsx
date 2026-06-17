import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Υποστήριξη | Greek Radio+',
  description: 'Επικοινωνήστε με την ομάδα υποστήριξης του Greek Radio+.',
};

const FAQS = [
  {
    q: 'Ένας σταθμός δεν παίζει — τι κάνω;',
    a: 'Μερικοί σταθμοί ενδέχεται να έχουν τεχνικά προβλήματα από την πλευρά τους. Δοκίμασε το κουμπί "Δοκίμασε ξανά" στην οθόνη του player. Αν το πρόβλημα παραμένει, ο σταθμός μπορεί να είναι προσωρινά εκτός λειτουργίας.',
  },
  {
    q: 'Η εφαρμογή δεν φορτώνει σταθμούς.',
    a: 'Βεβαιώσου ότι έχεις ενεργή σύνδεση στο internet. Η εφαρμογή απαιτεί σύνδεση για live streaming.',
  },
  {
    q: 'Πώς μπορώ να αποθηκεύσω έναν σταθμό ως αγαπημένο;',
    a: 'Πάτησε το εικονίδιο καρδιάς (♡) στην κάρτα ή στην οθόνη αναπαραγωγής του σταθμού.',
  },
  {
    q: 'Πώς λειτουργεί ο Sleep Timer;',
    a: 'Στην οθόνη αναπαραγωγής, πάτησε το εικονίδιο φεγγαριού (🌙) πάνω δεξιά και επίλεξε 15, 30 ή 60 λεπτά. Η εφαρμογή θα σταματήσει αυτόματα.',
  },
  {
    q: 'Πώς να διαγράψω τα δεδομένα μου;',
    a: 'Απεγκατάστησε την εφαρμογή. Όλα τα δεδομένα (αγαπημένα, ιστορικό) αποθηκεύονται τοπικά στη συσκευή σου και διαγράφονται αυτόματα.',
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-white/5 bg-bg-primary/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/icon.png" alt="Greek Radio+" width={28} height={28} className="rounded-lg" />
            <span className="font-bold">Greek Radio+</span>
          </Link>
          <Link href="/" className="text-text-secondary hover:text-white text-sm transition-colors">
            ← Αρχική
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-black mb-3">Υποστήριξη</h1>
          <p className="text-text-secondary text-lg">Είμαστε εδώ για να βοηθήσουμε.</p>
        </div>

        {/* Contact card */}
        <div className="bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10 border border-accent-primary/30 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-black mb-2">Επικοινωνία</h2>
          <p className="text-text-secondary mb-6">
            Για οποιαδήποτε ερώτηση, αναφορά σφάλματος ή πρόταση, στείλε μας email.
            Απαντάμε εντός 1–2 εργάσιμων ημερών.
          </p>
          <a
            href="mailto:kolepidas@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-black font-bold px-6 py-3 rounded-2xl hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            kolepidas@gmail.com
          </a>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-black mb-6">Συχνές Ερωτήσεις</h2>
        <div className="space-y-3 mb-16">
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

        {/* App info */}
        <div className="bg-bg-card border border-white/5 rounded-3xl p-8">
          <h2 className="text-xl font-bold mb-4">Πληροφορίες Εφαρμογής</h2>
          <div className="space-y-2 text-sm text-text-secondary">
            <p><span className="text-white font-medium">Εφαρμογή:</span> Greek Radio+</p>
            <p><span className="text-white font-medium">Πλατφόρμα:</span> iOS (iPhone)</p>
            <p><span className="text-white font-medium">Email υποστήριξης:</span>{' '}
              <a href="mailto:kolepidas@gmail.com" className="text-accent-primary hover:underline">
                kolepidas@gmail.com
              </a>
            </p>
            <p><span className="text-white font-medium">Πολιτική Απορρήτου:</span>{' '}
              <Link href="/privacy" className="text-accent-primary hover:underline">Διαβάστε εδώ</Link>
            </p>
            <p><span className="text-white font-medium">Όροι Χρήσης:</span>{' '}
              <Link href="/terms" className="text-accent-primary hover:underline">Διαβάστε εδώ</Link>
            </p>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/5 py-8 mt-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <Link href="/" className="hover:text-white transition-colors">← Αρχική</Link>
          <p>© {new Date().getFullYear()} Greek Radio+</p>
          <Link href="/privacy" className="hover:text-white transition-colors">Πολιτική Απορρήτου</Link>
        </div>
      </footer>
    </div>
  );
}
