import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>📞 Contact</h1>
      </section>
      <section className="content">
        <h2>Contactez-nous</h2>
        <p>N'hésitez pas à nous contacter pour toute question ou demande de devis.</p>
        <p>Nous répondons rapidement et sommes disponibles sur place à l'année.</p>
        <p>📧 <Link href="mailto:lesclesducharmaix@gmail.com">lesclesducharmaix@gmail.com</Link></p>
        <p>📍 735 rue du Cheval, 73500 Valfréjus</p>
        <p>📞 <Link href="tel:+33787317301">07 87 31 73 01</Link></p>
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