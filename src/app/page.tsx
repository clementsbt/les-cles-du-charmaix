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
    // Add home-page class for scroll snap
    document.documentElement.classList.add('home-page');
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.documentElement.classList.remove('home-page');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 300);
  const heroTranslate = Math.min(0, -scrollY * 0.5);
  const contentOpacity = Math.max(0, 1 - scrollY / 200);
  const fadeProgress = Math.min(1, Math.max(0, (scrollY - 300) / 300));

  return (
    <>
      <Navbar />
      
      {/* Background transition overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/charmaix-mobile.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          transition: 'opacity 0.1s ease-out',
          opacity: 1 - fadeProgress,
          filter: 'blur(1px)',
          transform: 'scale(1.1)'
        }}
        className="hero-bg"
      />


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
            <button 
              onClick={() => {
                const target = document.getElementById('services');
                if (!target) return;
                const start = window.scrollY;
                const targetY = target.getBoundingClientRect().top + start;
                const duration = 1500;
                const startTime = performance.now();
                
                const animate = (currentTime: number) => {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const ease = 1 - Math.pow(1 - progress, 3);
                  window.scrollTo(0, start + (targetY - start) * ease);
                  if (progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
              }}
              className="cta-button"
            >
              En savoir plus
              <span className="arrow">↓</span>
            </button>
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