import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function Cles() {
  return (
    <div className="cles-page">
      <Navbar />
      <section className="page-hero">
        <span style={{ fontSize: '3rem', marginBottom: '10px' }}>🔑</span>
        <h1>Gestion des clés</h1>
      </section>

      {/* Image à cheval sur header et contenu */}
      <div className="cles-image-card">
        <Image
          src="/cles-main.jpg"
          alt="Remise des clés"
          fill
          style={{ objectFit: 'cover', borderRadius: '16px' }}
        />
      </div>

      {/* Contenu */}
      <section className="content">
        <div className="cles-card">
          <h2>Gestion des clés</h2>
          <p>Service d'accueil des voyageurs et remise des clés lors des arrivées et départs.</p>
          <p>Nous assurons une arrivée fluide et professionnelle pour vos locataires.</p>
          <p>Services inclus :</p>
          <ul>
            <li>Remise des clés en main propre</li>
            <li>État des lieux d'entrée</li>
            <li>Présentation du logement</li>
            <li>État des lieux de sortie</li>
            <li>Remise des clés au départ</li>
          </ul>
        </div>
        <Link href="/" className="back-link">← Retour au site</Link>
      </section>

      {/* Contact */}
      <section className="contact">
        <p><Link href="mailto:lesclesducharmaix@gmail.com">📧 lesclesducharmaix@gmail.com</Link></p>
        <p>📍 735 rue du Cheval, 73500 Valfréjus</p>
        <p><Link href="tel:+33781462132">📞 07 81 46 21 32</Link></p>
      </section>
    </div>
  );
}