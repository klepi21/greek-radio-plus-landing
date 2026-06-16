import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Όροι Χρήσης | Greek Radio+',
  description: 'Όροι χρήσης της εφαρμογής Greek Radio+.',
};

const LAST_UPDATED = '17 Ιουνίου 2025';

export default function TermsPage() {
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
          <h1 className="text-4xl font-black mb-3">Όροι Χρήσης</h1>
          <p className="text-text-secondary">Τελευταία ενημέρωση: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-6">

          <Section title="1. Αποδοχή Όρων">
            <p>
              Με τη λήψη, εγκατάσταση ή χρήση της εφαρμογής <strong>Greek Radio+</strong>,
              αποδέχεστε πλήρως και ανεπιφύλακτα τους παρόντες Όρους Χρήσης. Εάν δεν
              συμφωνείτε με οποιονδήποτε από αυτούς τους όρους, παρακαλούμε να μην
              χρησιμοποιείτε την Εφαρμογή.
            </p>
          </Section>

          <Section title="2. Περιγραφή Υπηρεσίας">
            <p>
              Το <strong>Greek Radio+</strong> είναι εφαρμογή κινητού τηλεφώνου για iOS
              και Android που παρέχει πρόσβαση σε live streaming ελληνικών ραδιοφωνικών
              σταθμών. Η Εφαρμογή:
            </p>
            <ul>
              <li>Παρέχει πρόσβαση σε 114 ελληνικούς ραδιοφωνικούς σταθμούς</li>
              <li>Δεν φιλοξενεί ή μεταδίδει το ίδιο το ραδιοφωνικό περιεχόμενο</li>
              <li>Λειτουργεί ως αποθηκευτής συνδέσμων (link aggregator) προς τις ροές των σταθμών</li>
              <li>Παρέχεται δωρεάν με υποστήριξη διαφημίσεων</li>
            </ul>
          </Section>

          <Section title="3. Πνευματική Ιδιοκτησία">
            <p>
              Η Εφαρμογή (κώδικας, σχεδιασμός, γραφικά, λογότυπο) αποτελεί πνευματική
              ιδιοκτησία του Greek Radio+. Απαγορεύεται:
            </p>
            <ul>
              <li>Η αντιγραφή, τροποποίηση ή αναδιανομή του κώδικα ή του περιεχομένου της Εφαρμογής</li>
              <li>Η αντίστροφη μηχανική (reverse engineering) της Εφαρμογής</li>
              <li>Η χρήση της Εφαρμογής για εμπορικούς σκοπούς χωρίς γραπτή άδεια</li>
            </ul>
            <p>
              Το ραδιοφωνικό περιεχόμενο ανήκει στους αντίστοιχους ραδιοφωνικούς σταθμούς
              και προστατεύεται από την εκάστοτε νομοθεσία περί πνευματικής ιδιοκτησίας.
            </p>
          </Section>

          <Section title="4. Χρήση της Εφαρμογής">
            <p>Συμφωνείτε να χρησιμοποιείτε την Εφαρμογή:</p>
            <ul>
              <li>Αποκλειστικά για νόμιμους σκοπούς και σύμφωνα με τους παρόντες Όρους</li>
              <li>Χωρίς να παρεμποδίζετε ή να διαταράσσετε τη λειτουργία της</li>
              <li>Χωρίς να αποπειράστε να αποκτήσετε μη εξουσιοδοτημένη πρόσβαση σε συστήματα</li>
              <li>Σύμφωνα με τους νόμους της χώρας σας</li>
            </ul>
          </Section>

          <Section title="5. Διαθεσιμότητα Υπηρεσίας">
            <p>
              Η Εφαρμογή παρέχεται «ως έχει» και «όπως είναι διαθέσιμη». Δεν εγγυόμαστε:
            </p>
            <ul>
              <li>Την αδιάλειπτη ή αλάνθαστη λειτουργία της Εφαρμογής</li>
              <li>Τη διαρκή διαθεσιμότητα οποιουδήποτε ραδιοφωνικού σταθμού</li>
              <li>Την ποιότητα ή την ακρίβεια του ραδιοφωνικού περιεχομένου</li>
            </ul>
            <p>
              Ορισμένοι ραδιοφωνικοί σταθμοί ενδέχεται να μην είναι διαθέσιμοι λόγω
              τεχνικών προβλημάτων από την πλευρά των ίδιων των σταθμών.
            </p>
          </Section>

          <Section title="6. Διαφημίσεις">
            <p>
              Η Εφαρμογή εμφανίζει διαφημίσεις μέσω της υπηρεσίας Google AdMob. Με τη
              χρήση της Εφαρμογής αποδέχεστε:
            </p>
            <ul>
              <li>Την εμφάνιση διαφημίσεων εντός της Εφαρμογής</li>
              <li>Τη συλλογή δεδομένων από το AdMob σύμφωνα με την πολιτική απορρήτου της Google</li>
              <li>Ότι δεν εγγυόμαστε το περιεχόμενο ή την ακρίβεια των διαφημίσεων τρίτων</li>
            </ul>
            <p>
              Τα έσοδα από διαφημίσεις χρησιμοποιούνται για τη συντήρηση και ανάπτυξη
              της Εφαρμογής.
            </p>
          </Section>

          <Section title="7. Περιορισμός Ευθύνης">
            <p>
              Στο μέγιστο βαθμό που επιτρέπεται από το εφαρμοστέο δίκαιο, το Greek Radio+
              δεν ευθύνεται για:
            </p>
            <ul>
              <li>Οποιαδήποτε άμεση, έμμεση, τυχαία ή αποθετική ζημία από τη χρήση ή αδυναμία χρήσης της Εφαρμογής</li>
              <li>Διακοπές ή σφάλματα στη ροή των ραδιοφωνικών σταθμών</li>
              <li>Το περιεχόμενο που μεταδίδουν οι ραδιοφωνικοί σταθμοί</li>
              <li>Ζημίες από τη χρήση ή μη χρήση πληροφοριών που παρέχονται από τους σταθμούς</li>
            </ul>
          </Section>

          <Section title="8. Σύνδεσμοι Τρίτων">
            <p>
              Η Εφαρμογή συνδέεται με ροές ήχου τρίτων (ραδιοφωνικοί σταθμοί). Δεν
              ελέγχουμε και δεν ευθυνόμαστε για το περιεχόμενο, την πολιτική απορρήτου
              ή τις πρακτικές οποιωνδήποτε ιστοτόπων ή υπηρεσιών τρίτων.
            </p>
          </Section>

          <Section title="9. Τερματισμός">
            <p>
              Διατηρούμε το δικαίωμα να τερματίσουμε ή να αναστείλουμε την πρόσβαση στην
              Εφαρμογή, χωρίς προηγούμενη ειδοποίηση, για οποιονδήποτε λόγο, συμπεριλαμβανομένης
              της παραβίασης των παρόντων Όρων.
            </p>
          </Section>

          <Section title="10. Εφαρμοστέο Δίκαιο">
            <p>
              Οι παρόντες Όροι Χρήσης διέπονται και ερμηνεύονται σύμφωνα με την ελληνική
              νομοθεσία και την ισχύουσα νομοθεσία της Ευρωπαϊκής Ένωσης. Για οποιαδήποτε
              διαφορά προκύψει, αρμόδια ορίζονται τα δικαστήρια της Αθήνας.
            </p>
          </Section>

          <Section title="11. Αλλαγές στους Όρους">
            <p>
              Διατηρούμε το δικαίωμα να τροποποιούμε τους παρόντες Όρους Χρήσης ανά
              πάσα στιγμή. Οι αλλαγές τίθενται σε ισχύ άμεσα μετά τη δημοσίευσή τους
              στη σελίδα αυτή. Η συνέχιση χρήσης της Εφαρμογής μετά τις αλλαγές
              συνιστά αποδοχή των νέων Όρων.
            </p>
          </Section>

          <Section title="12. Επικοινωνία">
            <p>
              Για ερωτήσεις σχετικά με τους παρόντες Όρους Χρήσης, επικοινωνήστε μαζί μας:
            </p>
            <div className="bg-bg-elevated rounded-2xl p-6 border border-white/5 mt-4">
              <p className="font-semibold text-white mb-1">Greek Radio+</p>
              <p className="text-sm">
                Email:{' '}
                <a href="mailto:kolepidas@gmail.com" className="text-accent-primary hover:underline">
                  kolepidas@gmail.com
                </a>
              </p>
            </div>
          </Section>
        </div>
      </div>

      <footer className="border-t border-white/5 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <Link href="/" className="hover:text-white transition-colors">← Αρχική</Link>
          <p>© {new Date().getFullYear()} Greek Radio+</p>
          <Link href="/privacy" className="hover:text-white transition-colors">Πολιτική Απορρήτου →</Link>
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
