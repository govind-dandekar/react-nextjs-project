import Link from 'next/link'

// @ refers to root folder
import Header from '@/components/header';

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}


// localhost:3000/about