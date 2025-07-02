'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function MealsPage() {
  const [meals, setMeals] = useState<any[]>([]);
  const [newMeal, setNewMeal] = useState('');

  const fetchMeals = async () => {
    const { data } = await supabase.from('meals').select('*');
    setMeals(data || []);
  };

  const addMeal = async () => {
    if (!newMeal) return;
    await supabase.from('meals').insert([{ name: newMeal }]);
    setNewMeal('');
    fetchMeals();
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <div className="p-6 text-primary bg-background min-h-screen">
      <h2 className="text-2xl mb-4">Meals Log</h2>
      <input
        value={newMeal}
        onChange={(e) => setNewMeal(e.target.value)}
        placeholder="Add a meal"
        className="p-2 rounded bg-white text-black mb-2"
      />
      <button onClick={addMeal} className="bg-primary text-black px-4 py-2 rounded mb-4">
        Add Meal
      </button>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </div>
  );
}
