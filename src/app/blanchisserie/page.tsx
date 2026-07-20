import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Blanchisserie() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>🧺 Blanchisserie</h1>
      </section>
      <section className="content">
        <h2>Service de blanchisserie</h2>
        <p>Service de linge de maison et nettoyage pour vos locations.</p>
        <p>Nous fournissons et entretenons le linge pour vos voyageurs.</p>
        <p>Services inclus :</p>
        <ul>
          <li>Linge de lit frais</li>
          <li>Serviettes de bain</li>
          <li>Torchons et napperons</li>
          <li>Blanchissage et repassage</li>
          <li>Livraison sur place</li>
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