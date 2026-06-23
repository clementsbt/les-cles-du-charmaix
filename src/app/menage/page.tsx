import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Menage() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>🧹 Ménage</h1>
      </section>
      <section className="content">
        <h2>Service de Ménage</h2>
        <p>Nous offrons un service de nettoyage complet pour votre location de vacances à Valfréjus.</p>
        <p>Notre équipe s'assure que votre propriété est impeccable avant chaque arrivée et après chaque départ.</p>
        <p>Services inclus :</p>
        <ul>
          <li>Nettoyage complet des pièces</li>
          <li>Changement du linge de maison</li>
          <li>Nettoyage des surfaces et sols</li>
          <li>Élimination des poussières</li>
          <li>Nettoyage cuisine et salle de bain</li>
        </ul>
        <Link href="/" className="back-link">← Retour au site</Link>
      </section>
      <section className="contact">
        <p><Link href="mailto:lesclesducharmaix@gmail.com">📧 lesclesducharmaix@gmail.com</Link></p>
        <p>📍 735 rue du Cheval, 73500 Valfréjus</p>
        <p><Link href="tel:+33787317301">📞 07 87 31 73 01</Link></p>
      </section>
    </>
  );
}