// ✅ /app/plans/[id]/day/[day]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const sampleDayData = {
  exercises: [
    {
      name: 'Jumping Jacks',
      image: '/images/exercises/jumping-jacks.gif',
      video: 'https://www.youtube.com/embed/c4DAn06DtF8',
      description: 'Warm up your full body and increase heart rate.',
    },
    {
      name: 'Push-ups',
      image: '/images/exercises/push-ups.gif',
      video: 'https://www.youtube.com/embed/IODxDxX7oi4',
      description: 'Strengthen your chest, shoulders, and triceps.',
    },
    {
      name: 'Plank',
      image: '/images/exercises/plank.gif',
      video: 'https://www.youtube.com/embed/pSHjTRCQxIw',
      description: 'Work your core, back, and posture.',
    },
  ],
};

export default function DailyWorkoutPage() {
  const { id, day } = useParams();
  const [completed, setCompleted] = useState(false);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(`${id}-${day}-completed`);
    if (saved === 'true') setCompleted(true);
    const storedNote = localStorage.getItem(`${id}-${day}-notes`);
    if (storedNote) setNotes(storedNote);
  }, [id, day]);

  const markComplete = () => {
    setCompleted(true);
    localStorage.setItem(`${id}-${day}-completed`, 'true');
  };

  const saveNotes = () => {
    localStorage.setItem(`${id}-${day}-notes`, notes);
  };

  return (
    <div className="bg-black min-h-screen text-white px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-yellow-400">Day {day} - Workout Routine</h1>
        <Link href={`/plans/${id}`} className="text-sm underline">← Back to Plan</Link>
      </div>

      <div className="space-y-8">
        {sampleDayData.exercises.map((exercise, i) => (
          <div key={i} className="bg-zinc-800 rounded-xl p-5 shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-yellow-300">{exercise.name}</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <img src={exercise.image} alt={exercise.name} className="w-64 rounded-lg object-contain" />
              <iframe
                src={exercise.video}
                title={exercise.name}
                className="w-full h-64 rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-gray-300 mt-3">{exercise.description}</p>
          </div>
        ))}

        <div className="bg-zinc-900 p-4 rounded-lg">
          <h3 className="text-yellow-400 font-semibold mb-2">📝 Notes</h3>
          <textarea
            className="w-full p-2 rounded text-black"
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            onBlur={saveNotes}
          />
        </div>

        <button
          onClick={markComplete}
          disabled={completed}
          className={`px-6 py-3 rounded font-bold transition ${
            completed
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'bg-yellow-400 hover:bg-yellow-500 text-black'
          }`}
        >
          {completed ? '✅ Completed' : 'Mark Day Complete'}
        </button>
      </div>
    </div>
  );
}
