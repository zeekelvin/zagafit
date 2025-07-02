#How to Run This in Supabase:

#Go to Supabase Dashboard → SQL Editor → New Query
#Paste the above SQL
#Run query

  
-- Users: Supabase Auth handles users automatically.

-- Meals Table
create table meals (
  id serial primary key,
  user_id uuid references auth.users(id) on delete cascade,
  name text,
  created_at timestamp default now()
);

-- Workouts Table
create table workouts (
  id serial primary key,
  user_id uuid references auth.users(id) on delete cascade,
  name text,
  created_at timestamp default now()
);

-- Journal Table
create table journal (
  id serial primary key,
  user_id uuid references auth.users(id) on delete cascade,
  note text,
  created_at timestamp default now()
);

-- Progress Photos Table
create table progress_photos (
  id serial primary key,
  user_id uuid references auth.users(id) on delete cascade,
  url text,
  created_at timestamp default now()
);
