'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient'; // if one level deep

export default function MealsPage() {
  const [meals, setMeals] = useState<any[]>([]);
  const [newMeal, setNewMeal] = useState('');

  const fetchMeals = async () => {
    const { data } = await supabase.from('meals').select('*').order('created_at', { ascending: false });
    setMeals(data || []);
  };

  const addMeal = async () => {
    if (!newMeal.trim()) return;
    await supabase.from('meals').insert([{ name: newMeal }]);
    setNewMeal('');
    fetchMeals();
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-black text-yellow-400">
      <h1 className="text-3xl font-bold mb-4">🍽 Meals Tracker</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newMeal}
          onChange={(e) => setNewMeal(e.target.value)}
          placeholder="e.g. Grilled Chicken Salad"
          className="text-black px-4 py-2 rounded mr-2"
        />
        <button onClick={addMeal} className="bg-yellow-400 text-black px-4 py-2 rounded">
          Add Meal
        </button>
      </div>
      <ul className="space-y-2">
        {meals.map((meal) => (
          <li key={meal.id} className="bg-yellow-400 text-black p-2 rounded">
            {meal.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
