import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const services = [
  { icon: '🧹', title: 'Ménage', desc: 'Nettoyage complet', href: '/menage' },
  { icon: '🔑', title: 'Gestion clés', desc: 'Accueil et remise', href: '/cles' },
  { icon: '🏠', title: 'Locations', desc: 'Gestion complète', href: '/locations' },
  { icon: '🔧', title: 'Travaux', desc: 'Petits entretiens', href: '/travaux' },
  { icon: '🧺', title: 'Blanchisserie', desc: 'Linge de maison', href: '/blanchisserie' },
  { icon: '📞', title: 'Contact', desc: 'Contactez Lou', href: '/contact' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      
      <section className="hero">
        <h1 className="hero-main-title">Les Clés du Charmaix</h1>
        <div className="hero-content">
          <Image src="/logo.png" alt="Logo" className="hero-logo" width={140} height={140} />
          <p className="welcome">"Welcome to our village !!!"</p>
          <div className="flags">
            <span>🇫🇷</span>
            <span>🇬🇧</span>
            <span>🇮🇹</span>
          </div>
        </div>
      </section>

      <section className="services-cards" id="services">
        <h2>Nos Services</h2>
        <div className="cards-grid">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="card">
              <div className="card-icon">{service.icon}</div>
              <div className="card-title">{service.title}</div>
              <div className="card-desc">{service.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-grid">
          <Link href="mailto:lesclesducharmaix@gmail.com">📧 lesclesducharmaix@gmail.com</Link>
          <span>📍 735 rue du Cheval, 73500 Valfréjus</span>
          <Link href="tel:+33787317301">📞 07 87 31 73 01</Link>
        </div>
      </section>

      <footer>
        <p>© 2026 <Link href="mailto:lesclesducharmaix@gmail.com">Les Clés du Charmaix</Link> • by Lou</p>
      </footer>
    </>
  );
}