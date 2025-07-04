'use client';
import Link from 'next/link';

const workouts = [
  {
    id: 'hiit',
    title: 'HIIT Blast',
    description: 'Full body high-intensity circuit',
    image: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    id: 'core',
    title: 'Core Crusher',
    description: 'Abs & core strength routine',
    image: 'https://i.imgur.com/fRXgJ9Bl.jpg',
  },
  {
    id: 'upper',
    title: 'Upper Body Sculpt',
    description: 'Pushups, dumbbell presses & arms',
    image: 'https://i.imgur.com/XOKdhSl.jpg',
  },
];

export default function WorkoutsPage() {
  return (
    <div className="p-6 bg-black text-yellow-400 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🏋️ Choose a Workout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workouts.map((workout) => (
          <Link href={`/workouts/${workout.id}`} key={workout.id}>
            <div className="bg-yellow-400 text-black p-4 rounded cursor-pointer hover:scale-105 transition">
              <img src={workout.image} alt={workout.title} className="rounded mb-3 w-full h-48 object-cover" />
              <h2 className="text-xl font-bold">{workout.title}</h2>
              <p>{workout.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
