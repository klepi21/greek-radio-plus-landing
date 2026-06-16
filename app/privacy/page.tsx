import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Πολιτική Απορρήτου | Greek Radio+',
  description: 'Πολιτική απορρήτου της εφαρμογής Greek Radio+.',
};

const LAST_UPDATED = '17 Ιουνίου 2025';

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-black mb-3">Πολιτική Απορρήτου</h1>
          <p className="text-text-secondary">Τελευταία ενημέρωση: {LAST_UPDATED}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10">

          <Section title="1. Εισαγωγή">
            <p>
              Η εφαρμογή <strong>Greek Radio+</strong> («Εφαρμογή», «εμείς», «μας») σέβεται
              το απόρρητό σας. Η παρούσα Πολιτική Απορρήτου περιγράφει ποιες πληροφορίες
              συλλέγουμε, πώς τις χρησιμοποιούμε και τα δικαιώματά σας σε σχέση με αυτές.
            </p>
            <p>
              Χρησιμοποιώντας την Εφαρμογή, αποδέχεστε τους όρους της παρούσας Πολιτικής
              Απορρήτου. Εάν δεν συμφωνείτε, παρακαλούμε να μην χρησιμοποιείτε την Εφαρμογή.
            </p>
          </Section>

          <Section title="2. Πληροφορίες που Συλλέγουμε">
            <Subsection title="2.1 Πληροφορίες που αποθηκεύονται τοπικά στη συσκευή σας">
              <p>Η Εφαρμογή αποθηκεύει τα παρακάτω δεδομένα <strong>αποκλειστικά στη συσκευή σας</strong> (AsyncStorage) και δεν τα μεταδίδει σε εξωτερικούς διακομιστές:</p>
              <ul>
                <li><strong>Αγαπημένοι σταθμοί:</strong> Λίστα με τους σταθμούς που έχετε επιλέξει ως αγαπημένους.</li>
                <li><strong>Πρόσφατα ακουσμένοι σταθμοί:</strong> Ιστορικό των 20 τελευταίων σταθμών που ακούσατε.</li>
                <li><strong>Ένταση ήχου:</strong> Η τελευταία ρύθμιση έντασης που επιλέξατε.</li>
                <li><strong>Πρόσφατες αναζητήσεις:</strong> Οι τελευταίες 5 αναζητήσεις σας εντός της Εφαρμογής.</li>
              </ul>
              <p>Αυτά τα δεδομένα παραμένουν αποκλειστικά στη συσκευή σας και διαγράφονται αυτόματα εάν απεγκαταστήσετε την Εφαρμογή.</p>
            </Subsection>

            <Subsection title="2.2 Δεδομένα που συλλέγει το Google AdMob">
              <p>
                Η Εφαρμογή χρησιμοποιεί την υπηρεσία διαφημίσεων <strong>Google AdMob</strong>
                (Google LLC) για την εμφάνιση διαφημίσεων. Το AdMob ενδέχεται να συλλέγει τα εξής:
              </p>
              <ul>
                <li>Αναγνωριστικό διαφήμισης συσκευής (Advertising ID / IDFA)</li>
                <li>Διεύθυνση IP</li>
                <li>Πληροφορίες συσκευής (τύπος, λειτουργικό σύστημα, ανάλυση οθόνης)</li>
                <li>Δεδομένα χρήσης εφαρμογής για στόχευση διαφημίσεων</li>
                <li>Στοιχεία τοποθεσίας σε γενικό επίπεδο (χώρα/περιοχή)</li>
              </ul>
              <p>
                Για περισσότερες πληροφορίες σχετικά με τη συλλογή δεδομένων από το AdMob, ανατρέξτε στην{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">
                  Πολιτική Απορρήτου της Google
                </a>.
              </p>
            </Subsection>

            <Subsection title="2.3 Δεδομένα streaming">
              <p>
                Κατά την αναπαραγωγή ενός ραδιοφωνικού σταθμού, η συσκευή σας συνδέεται
                απευθείας με τον server του σταθμού. Ο πάροχος του σταθμού ενδέχεται να
                καταγράψει τη διεύθυνση IP σας σύμφωνα με τη δική του πολιτική απορρήτου.
                Εμείς δεν λαμβάνουμε ούτε επεξεργαζόμαστε αυτά τα δεδομένα.
              </p>
            </Subsection>
          </Section>

          <Section title="3. Χρήση Δεδομένων">
            <p>Τα δεδομένα που αποθηκεύονται τοπικά χρησιμοποιούνται αποκλειστικά για:</p>
            <ul>
              <li>Την αποθήκευση των προτιμήσεών σας (αγαπημένοι σταθμοί, ένταση)</li>
              <li>Την παροχή καλύτερης εμπειρίας χρήστη (πρόσφατα ακουσμένοι)</li>
              <li>Την εμφάνιση σχετικών διαφημίσεων μέσω AdMob</li>
            </ul>
            <p>
              <strong>Δεν πωλούμε, δεν ενοικιάζουμε και δεν κοινοποιούμε</strong> τα
              προσωπικά σας δεδομένα σε τρίτους, εκτός από τη χρήση των υπηρεσιών
              διαφήμισης που περιγράφονται στην παρούσα Πολιτική.
            </p>
          </Section>

          <Section title="4. App Tracking Transparency (iOS)">
            <p>
              Σε συσκευές iOS 14.5 και νεότερες, η Εφαρμογή ενδέχεται να σας ζητήσει
              άδεια παρακολούθησης σύμφωνα με το πλαίσιο App Tracking Transparency (ATT)
              της Apple. Εάν επιλέξετε να αρνηθείτε, η Εφαρμογή θα εξακολουθεί να λειτουργεί
              κανονικά, αλλά οι διαφημίσεις που θα εμφανίζονται δεν θα είναι εξατομικευμένες.
            </p>
          </Section>

          <Section title="5. Δικαιώματά σας (GDPR)">
            <p>
              Ως χρήστης εντός της Ευρωπαϊκής Ένωσης, έχετε τα παρακάτω δικαιώματα
              σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR):
            </p>
            <ul>
              <li><strong>Δικαίωμα πρόσβασης:</strong> Μπορείτε να ζητήσετε ενημέρωση για τα δεδομένα που τηρούμε.</li>
              <li><strong>Δικαίωμα διαγραφής:</strong> Μπορείτε να διαγράψετε τα τοπικά δεδομένα απεγκαθιστώντας την Εφαρμογή.</li>
              <li><strong>Δικαίωμα εναντίωσης:</strong> Μπορείτε να απενεργοποιήσετε τη στόχευση διαφημίσεων από τις ρυθμίσεις της συσκευής σας.</li>
              <li><strong>Δικαίωμα φορητότητας:</strong> Τα τοπικά δεδομένα σας βρίσκονται αποκλειστικά στη συσκευή σας.</li>
            </ul>
            <p>
              Για να απενεργοποιήσετε τη στόχευση διαφημίσεων:
            </p>
            <ul>
              <li><strong>iOS:</strong> Ρυθμίσεις → Απόρρητο → Παρακολούθηση → Απενεργοποίηση παρακολούθησης</li>
              <li><strong>Android:</strong> Ρυθμίσεις → Google → Διαφημίσεις → Εξαίρεση από εξατομικευμένες διαφημίσεις</li>
            </ul>
          </Section>

          <Section title="6. Απόρρητο Παιδιών">
            <p>
              Η Εφαρμογή δεν απευθύνεται σε παιδιά κάτω των 13 ετών. Δεν συλλέγουμε
              εν γνώσει μας πληροφορίες από παιδιά κάτω των 13 ετών. Εάν πιστεύετε
              ότι ένα παιδί έχει παράσχει πληροφορίες, επικοινωνήστε μαζί μας ώστε
              να λάβουμε τα κατάλληλα μέτρα.
            </p>
          </Section>

          <Section title="7. Ασφάλεια">
            <p>
              Δεδομένου ότι όλα τα προσωπικά δεδομένα αποθηκεύονται τοπικά στη συσκευή
              σας, η ασφάλειά τους εξαρτάται από την ασφάλεια της ίδιας της συσκευής.
              Σας συνιστούμε να χρησιμοποιείτε κλείδωμα οθόνης και να διατηρείτε το
              λειτουργικό σύστημα της συσκευής σας ενημερωμένο.
            </p>
          </Section>

          <Section title="8. Αλλαγές στην Πολιτική Απορρήτου">
            <p>
              Ενδέχεται να ενημερώσουμε την παρούσα Πολιτική Απορρήτου κατά καιρούς.
              Θα σας ειδοποιήσουμε για οποιεσδήποτε αλλαγές δημοσιεύοντας τη νέα
              Πολιτική σε αυτή τη σελίδα και ενημερώνοντας την ημερομηνία «Τελευταία ενημέρωση».
              Η συνέχιση χρήσης της Εφαρμογής μετά τις αλλαγές συνιστά αποδοχή τους.
            </p>
          </Section>

          <Section title="9. Επικοινωνία">
            <p>
              Εάν έχετε ερωτήσεις σχετικά με την παρούσα Πολιτική Απορρήτου,
              επικοινωνήστε μαζί μας:
            </p>
            <div className="bg-bg-card rounded-2xl p-6 border border-white/5 mt-4">
              <p className="font-semibold mb-1">Greek Radio+</p>
              <p className="text-text-secondary text-sm">Email: <a href="mailto:kolepidas@gmail.com" className="text-accent-primary hover:underline">kolepidas@gmail.com</a></p>
            </div>
          </Section>
        </div>
      </div>

      <footer className="border-t border-white/5 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <Link href="/" className="hover:text-white transition-colors">← Αρχική</Link>
          <p>© {new Date().getFullYear()} Greek Radio+</p>
          <Link href="/terms" className="hover:text-white transition-colors">Όροι Χρήσης →</Link>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-bg-card/40 rounded-3xl p-8 border border-white/5">
      <h2 className="text-xl font-bold mb-5 text-white">{title}</h2>
      <div className="space-y-4 text-text-secondary leading-relaxed [&_strong]:text-white [&_a]:text-accent-primary [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className="font-semibold text-white mb-3">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
