// ✅ /app/plans/[id]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const planContent = {
  'zaga-beginner-7': {
    title: 'ZagaFit: 7-Day Beginner Challenge',
    duration: 7,
    exercises: [
      {
        name: 'Jumping Jacks',
        image: '/images/exercises/jumping-jacks.gif',
        video: 'https://www.youtube.com/embed/c4DAnQ6DtF8',
        description: 'Great for warming up and increasing heart rate.'
      },
      {
        name: 'Push-Ups',
        image: '/images/exercises/push-ups.gif',
        video: 'https://www.youtube.com/embed/IODxDxX7oi4',
        description: 'Build upper body strength and core stability.'
      },
      {
        name: 'Plank',
        image: '/images/exercises/plank.gif',
        video: 'https://www.youtube.com/embed/pSHjTRCQxIw',
        description: 'Engages your core, shoulders, and glutes.'
      },
    ],
  },
  'zaga-fatburn-21': {
    title: 'ZagaFit: 21-Day Fat Burn',
    duration: 21,
    exercises: [
      {
        name: 'Burpees',
        image: '/images/exercises/burpees.gif',
        video: 'https://www.youtube.com/embed/TU8QYVW0gDU',
        description: 'Full-body fat-burner with cardio intensity.',
      },
      {
        name: 'Mountain Climbers',
        image: '/images/exercises/mountain-climbers.gif',
        video: 'https://www.youtube.com/embed/cnyTQDSE884',
        description: 'Targets core, glutes, and shoulders.',
      },
      {
        name: 'High Knees',
        image: '/images/exercises/high-knees.gif',
        video: 'https://www.youtube.com/embed/OAJ_J3EZkdY',
        description: 'Cardio drill for fat burning and leg strength.',
      },
    ],
  },
  'zaga-strength-30': {
    title: 'ZagaFit: 30-Day Strength Builder',
    duration: 30,
    exercises: [
      {
        name: 'Bodyweight Squats',
        image: '/images/exercises/squats.gif',
        video: 'https://www.youtube.com/embed/aclHkVaku9U',
        description: 'Build leg strength and mobility.',
      },
      {
        name: 'Push Press',
        image: '/images/exercises/push-press.gif',
        video: 'https://www.youtube.com/embed/iaBVSJm78ko',
        description: 'Targets shoulders and arms.',
      },
      {
        name: 'Superman Hold',
        image: '/images/exercises/superman.gif',
        video: 'https://www.youtube.com/embed/z6PJMT2y8GQ',
        description: 'Strengthens lower back and glutes.',
      },
    ],
  },
};

export default function PlanDetail() {
  const { id } = useParams();
  const plan = planContent[id as keyof typeof planContent];

  if (!plan) return <p className="text-white p-4">Plan not found.</p>;

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <Link href="/plans" className="text-yellow-400 underline">← Back to Plans</Link>
      <h1 className="text-3xl font-bold text-yellow-400 mt-4 mb-2">{plan.title}</h1>
      <p className="text-gray-300 mb-6">Duration: {plan.duration} Days</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plan.exercises.map((exercise, index) => (
          <div key={index} className="bg-zinc-800 rounded-xl p-4 shadow-lg">
            <h2 className="text-xl font-bold text-yellow-300 mb-2">{exercise.name}</h2>
            <img src={exercise.image} alt={exercise.name} className="w-full h-48 object-contain rounded" />
            <p className="text-sm text-gray-400 mt-2">{exercise.description}</p>
            <div className="mt-4">
              <iframe
                className="w-full h-48 rounded"
                src={exercise.video}
                title={exercise.name}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
