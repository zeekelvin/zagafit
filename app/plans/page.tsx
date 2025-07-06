// ✅ /app/plans/page.tsx
'use client';
import Link from 'next/link';

const plans = [
  {
    id: 'zaga-beginner-7',
    title: 'ZagaFit: 7-Day Beginner Challenge',
    description: 'A gentle intro to get moving, daily for 1 week.',
    image: '/images/zagafit-beginner.png',
    duration: 7,
    completed: 3,
    exercises: ['Jumping Jacks', 'Push-ups', 'Plank'],
  },
  {
    id: 'zaga-fatburn-21',
    title: 'ZagaFit: 21-Day Fat Burn',
    description: 'Fat-melting HIIT, cardio, and core workouts.',
    image: '/images/zagafit-fatburn.png',
    duration: 21,
    completed: 12,
    exercises: ['Mountain Climbers', 'Burpees', 'High Knees'],
  },
  {
    id: 'zaga-strength-30',
    title: 'ZagaFit: 30-Day Strength Builder',
    description: 'Strength-based split with rest days built in.',
    image: '/images/zagafit-strength.png',
    duration: 30,
    completed: 6,
    exercises: ['Squats', 'Deadlifts', 'Push Press'],
  },
];

export default function PlansPage() {
  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-gray-900 min-h-screen text-white pb-12">
      <div className="bg-yellow-400 text-black px-8 py-4 flex items-center justify-between shadow-md">
        <h1 className="text-2xl font-bold">🔥 ZagaFit Workout Programs</h1>
        <Link href="/" className="hover:underline">🏠 Home</Link>
      </div>

      <div className="px-6 py-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Link key={plan.id} href={`/plans/${plan.id}`}>
              <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-64 object-contain rounded-t-xl"
                />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-yellow-400 mb-2">{plan.title}</h2>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                  <p className="text-gray-400 text-xs mt-2">Duration: {plan.duration} Days</p>
                  <p className="text-green-400 text-xs">✅ {plan.completed} / {plan.duration} Days Completed</p>
                  <p className="text-blue-400 text-xs mt-1">Exercises: {plan.exercises.join(', ')}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
