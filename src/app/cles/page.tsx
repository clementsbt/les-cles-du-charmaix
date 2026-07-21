import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function Cles() {
  return (
    <>
      <Navbar />
      {/* Header avec fond bleu marine et image qui déborde */}
      <section className="cles-header">
        <div className="cles-header-content">
          <div className="cles-header-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                style={{ borderRadius: '50%', border: '2px solid white', objectFit: 'cover' }}
              />
              <span style={{ color: 'white', fontWeight: 600, fontSize: '1.1rem' }}>Les Clés du Charmaix</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#e8a854', fontSize: '1.2rem' }}>📞</span>
              <a href="tel:+33781462132" style={{ color: '#e8a854', textDecoration: 'none', fontWeight: 500 }}>07 81 46 21 32</a>
            </div>
          </div>
          <div className="cles-header-row cles-header-title-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ fontSize: '2.5rem' }}>🔑</span>
              <h1 style={{ color: 'white', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>Gestion des clés</h1>
            </div>
          </div>
        </div>
        {/* Image qui déborde sur le contenu */}
        <div className="cles-header-image">
          <Image
            src="/cles-main.jpg"
            alt="Remise des clés"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>
      <section className="content">
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