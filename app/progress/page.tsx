'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ProgressPage() {
  const [photos, setPhotos] = useState<any[]>([]);
  const [url, setUrl] = useState('');

  const fetchPhotos = async () => {
    const { data } = await supabase.from('progress_photos').select('*');
    setPhotos(data || []);
  };

  const addPhoto = async () => {
    if (!url) return;
    await supabase.from('progress_photos').insert([{ url }]);
    setUrl('');
    fetchPhotos();
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="p-6 text-primary bg-background min-h-screen">
      <h2 className="text-2xl mb-4">Progress Photos</h2>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Image URL"
        className="p-2 rounded bg-white text-black mb-2"
      />
      <button onClick={addPhoto} className="bg-primary text-black px-4 py-2 rounded mb-4">
        Add Photo
      </button>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.url} alt="Progress" className="w-32 h-32 object-cover mb-2" />
          </li>
        ))}
      </ul>
    </div>
  );
}
