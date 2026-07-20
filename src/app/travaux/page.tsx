import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Travaux() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>🔧 Travaux d'appoint</h1>
      </section>
      <section className="content">
        <h2>Travaux d'appoint</h2>
        <p>Petits entretiens et réparations pour maintenir votre propriété en parfait état.</p>
        <p>Nous intervenons rapidement pour tous les petits travaux du quotidien.</p>
        <p>Services inclus :</p>
        <ul>
          <li>Remplacement d'ampoules</li>
          <li>Petites réparations électriques</li>
          <li>Réparation de robinets</li>
          <li>Entretien des équipements</li>
          <li>Petit bricolage divers</li>
        </ul>
        <Link href="/" className="back-link">← Retour au site</Link>
      </section>
      <section className="contact">
        <p><Link href="mailto:lesclesducharmaix@gmail.com">📧 lesclesducharmaix@gmail.com</Link></p>
        <p>📍 735 rue du Cheval, 73500 Valfréjus</p>
        <p><Link href="tel:+33781462132">📞 07 81 46 21 32</Link></p>
      </section>
    </>
  );
}