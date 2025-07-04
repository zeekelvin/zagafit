'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient'; // if one level deep

export default function JournalPage() {
  const [entries, setEntries] = useState<any[]>([]);
  const [note, setNote] = useState('');

  const fetchEntries = async () => {
    const { data } = await supabase.from('journal').select('*');
    setEntries(data || []);
  };

  const addEntry = async () => {
    if (!note) return;
    await supabase.from('journal').insert([{ note }]);
    setNote('');
    fetchEntries();
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="p-6 text-primary bg-background min-h-screen">
      <h2 className="text-2xl mb-4">Journal</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write something..."
        className="p-2 rounded bg-white text-black mb-2 w-full"
      />
      <button onClick={addEntry} className="bg-primary text-black px-4 py-2 rounded mb-4">
        Add Entry
      </button>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>{entry.note}</li>
        ))}
      </ul>
    </div>
  );
}
