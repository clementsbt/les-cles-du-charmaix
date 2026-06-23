import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
  href: string;
}

export default function ServiceCard({ icon, title, desc, href }: ServiceCardProps) {
  return (
    <Link href={href} className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <div className="card-desc">{desc}</div>
    </Link>
  );
}