'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient'; // if one level deep
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      alert('Check your email for the confirmation link!');
      router.push('/login');
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background text-primary">
      <h2 className="text-2xl mb-4">Register for ZagaFit</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 rounded bg-white text-black"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 rounded bg-white text-black"
      />
      <button onClick={handleRegister} className="bg-primary text-black px-4 py-2 rounded">
        Register
      </button>
      {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
    </div>
  );
}
