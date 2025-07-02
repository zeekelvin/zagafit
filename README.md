# All-In-One Health, Fitness, and Goal Tracking App/Website (No Monthly Fees!)
# ZagaFit - Fit & Lifestyle by Zaga (Next.js + Supabase Starter)

## ✅ Features
- Next.js 14+ (App directory)
- Supabase Auth (Email/Password Login & Register)
- Tailwind CSS with Black/Yellow Theme
- CRUD for: Meals, Workouts, Journal, Progress Photos

## ✅ Setup Steps:

1. **Clone the Project:**
```bash
git clone [Your GitHub Repo URL]  # or use local files
cd ZagaFit

2. Install Dependencies:
npm install

3. Setup .env.local:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

4. Set Up Supabase Database:
Go to your Supabase SQL Editor
Run the schema from ZagaFit_Schema.sql

5. Run the App Locally:
npm run dev

6. Optional Deploy to Vercel:
Push your repo to GitHub
Connect your GitHub repo to https://vercel.com
Set same Supabase env vars on Vercel

✅ Pages Included:

/login
/register
/
/meals
/workouts
/journal
/progress
Core Features:

Feature	How You Can Build It
📆 Meal Planner	Create a Food Journal database (Notion/Supabase) with fields like Date, Meals, Calories
🏋️ Workout Tracker	Log exercises, sets, reps, duration
📝 Daily Journal	Create a simple “Journal Entry” database with date, mood, energy
📈 Progress Tracking	Add charts showing Weight over Time, Steps per day, Calories etc
🎯 Goal & Habit Tracking	Checkboxes for daily goals, weekly wins, monthly challenges
📷 Progress Photos	Upload photos into your app using file upload to Supabase storage or embed image links
✅ Weekly Check-ins	Create a simple form or section for weekly reviews
