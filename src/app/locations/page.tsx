import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Locations() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>🏠 Locations</h1>
      </section>
      <section className="content">
        <h2>Gestion de votre bien</h2>
        <p>Gestion complète de votre bien immobilier à Valfréjus.</p>
        <p>Nous nous occupons de tout pour vous garantir des locations réussies.</p>
        <p>Services inclus :</p>
        <ul>
          <li>Publication des annonces</li>
          <li>Gestion des réservations</li>
          <li>Communication avec les voyageurs</li>
          <li>État des lieux</li>
          <li>Gestion des paiements</li>
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