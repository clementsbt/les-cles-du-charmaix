import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        <Image src="/logo.png" alt="Logo" width={40} height={40} style={{ borderRadius: '50%', border: '2px solid #fff' }} />
        <span className="navbar-title">Les Clés du Charmaix</span>
      </Link>
      <Link href="tel:+33787317301" className="navbar-phone">📞 07 87 31 73 01</Link>
    </nav>
  );
}