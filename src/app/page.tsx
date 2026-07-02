'use client';

import { useState, useEffect } from 'react';
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 300);
  const heroTranslate = Math.min(0, -scrollY * 0.5);
  const contentOpacity = Math.max(0, 1 - scrollY / 200);

  return (
    <>
      <Navbar />
      
      <section className="hero">
        <div style={{ 
          opacity: heroOpacity, 
          transform: `translateY(${heroTranslate}px)`,
          transition: 'opacity 0.1s, transform 0.1s'
        }}>
          <h1 className="hero-main-title">Les Clés du Charmaix</h1>
          <div className="hero-content" style={{ opacity: contentOpacity, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexDirection: 'row' }} className="hero-images">
              <Image src="/logo.png" alt="Logo" className="hero-logo" width={140} height={140} style={{ borderRadius: '50%', border: '3px solid white', objectFit: 'cover' }} />
              <Image src="/lou.jpg" alt="Lou" width={160} height={160} style={{ borderRadius: '50%', border: '3px solid white', objectFit: 'cover' }} />
            </div>
            <p className="welcome">"Welcome to our village !!!"</p>
            <div className="flags">
              <span>🇫🇷</span>
              <span>🇬🇧</span>
              <span>🇮🇹</span>
            </div>
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