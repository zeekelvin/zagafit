'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [newWorkout, setNewWorkout] = useState('');

  const fetchWorkouts = async () => {
    const { data } = await supabase.from('workouts').select('*');
    setWorkouts(data || []);
  };

  const addWorkout = async () => {
    if (!newWorkout) return;
    await supabase.from('workouts').insert([{ name: newWorkout }]);
    setNewWorkout('');
    fetchWorkouts();
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div className="p-6 text-primary bg-background min-h-screen">
      <h2 className="text-2xl mb-4">Workouts Log</h2>
      <input
        value={newWorkout}
        onChange={(e) => setNewWorkout(e.target.value)}
        placeholder="Add a workout"
        className="p-2 rounded bg-white text-black mb-2"
      />
      <button onClick={addWorkout} className="bg-primary text-black px-4 py-2 rounded mb-4">
        Add Workout
      </button>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
}
