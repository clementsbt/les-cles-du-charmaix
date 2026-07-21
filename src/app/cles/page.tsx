import Link from 'next/link';
import Image from 'next/image';

export default function Cles() {
  return (
    <>
      {/* Header bleu marine */}
      <header className="cles-header">
        <div className="cles-header-top">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              style={{ borderRadius: '50%', border: '2px solid white', objectFit: 'cover' }}
            />
            <span style={{ color: 'white', fontWeight: 600, fontSize: '1rem' }}>Les Clés du Charmaix</span>
          </div>
          <a href="tel:+33781462132" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'white', textDecoration: 'none', fontSize: '0.95rem' }}>
            <span>📞</span>
            <span>07 81 46 21 32</span>
          </a>
        </div>
        <div className="cles-header-title">
          <span style={{ fontSize: '2.5rem' }}>🔑</span>
          <h1>Gestion des clés</h1>
        </div>
      </header>

      {/* Contenu avec image à droite */}
      <section className="content">
        <div className="cles-layout">
          <div className="cles-text">
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
          <div className="cles-image-card">
            <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '260px' }}>
              <Image
                src="/cles-main.jpg"
                alt="Remise des clés"
                fill
                style={{ objectFit: 'cover', borderRadius: '16px' }}
              />
            </div>
          </div>
        </div>
        <Link href="/" className="back-link">← Retour au site</Link>
      </section>

      {/* Contact */}
      <section className="contact">
        <p><Link href="mailto:lesclesducharmaix@gmail.com">📧 lesclesducharmaix@gmail.com</Link></p>
        <p>📍 735 rue du Cheval, 73500 Valfréjus</p>
        <p><Link href="tel:+33781462132">📞 07 81 46 21 32</Link></p>
      </section>
    </>
  );
}