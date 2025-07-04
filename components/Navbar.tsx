'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabaseClient';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <nav className="bg-yellow-400 text-black px-6 py-3 flex justify-between items-center">
      <div className="font-bold">ZagaFit</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/meals">Meals</Link>
        <Link href="/workouts">Workouts</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/progress">Progress</Link>
        <Link href="/plans">Plans</Link>
        <button onClick={handleLogout} className="ml-4 bg-black text-yellow-400 px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </nav>
  );
}
