-- Create courses table
create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  level text check (level in ('Beginner','Intermediate','Advanced')) default 'Beginner',
  duration text,
  students_count integer default 0,
  rating numeric(2,1) default 0.0,
  image_emoji text,
  technologies text[] default '{}',
  popular boolean default false,
  created_at timestamptz not null default now()
);

alter table public.courses enable row level security;

create policy "Public read courses"
  on public.courses for select
  to anon, authenticated
  using (true);

-- Create resource categories
create table if not exists public.resource_categories (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  icon_key text, -- e.g., 'file', 'video', 'code'
  color_key text default 'primary', -- e.g., 'primary', 'accent', 'success'
  created_at timestamptz not null default now()
);

alter table public.resource_categories enable row level security;

create policy "Public read resource categories"
  on public.resource_categories for select
  to anon, authenticated
  using (true);

-- Create resources table
create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.resource_categories(id) on delete cascade,
  name text not null,
  type text,
  downloads integer default 0,
  recent boolean default false,
  link text,
  created_at timestamptz not null default now()
);

alter table public.resources enable row level security;

create policy "Public read resources"
  on public.resources for select
  to anon, authenticated
  using (true);

-- Create live events table
create table if not exists public.live_events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  start_at timestamptz not null,
  speaker text,
  attendees_count integer default 0,
  type text,
  created_at timestamptz not null default now()
);

alter table public.live_events enable row level security;

create policy "Public read live events"
  on public.live_events for select
  to anon, authenticated
  using (true);

-- Seed data (only if empty)
insert into public.courses (title, description, level, duration, students_count, rating, image_emoji, technologies, popular)
select * from (
  values
    ('Full-Stack Web Development', 'Master React, Node.js, and database technologies to build complete web applications.', 'Beginner', '12 weeks', 2500, 4.9, '🌐', array['React','Node.js','MongoDB','Express'], true),
    ('Machine Learning & AI', 'Learn Python, TensorFlow, and deep learning to build intelligent applications.', 'Intermediate', '16 weeks', 1800, 4.8, '🤖', array['Python','TensorFlow','Keras','Pandas'], false),
    ('Cloud DevOps Engineering', 'Master AWS, Docker, Kubernetes, and CI/CD pipelines for modern deployment.', 'Advanced', '14 weeks', 1200, 4.9, '☁️', array['AWS','Docker','Kubernetes','Jenkins'], true),
    ('Mobile App Development', 'Build cross-platform mobile apps with React Native and Flutter frameworks.', 'Intermediate', '10 weeks', 2100, 4.7, '📱', array['React Native','Flutter','Firebase','Redux'], false),
    ('Cybersecurity Fundamentals', 'Learn ethical hacking, network security, and protection strategies.', 'Beginner', '8 weeks', 1500, 4.8, '🔒', array['Kali Linux','Wireshark','Metasploit','OWASP'], false),
    ('Data Science & Analytics', 'Analyze big data using Python, R, and advanced statistical methods.', 'Intermediate', '12 weeks', 1900, 4.9, '📊', array['Python','R','SQL','Tableau'], true)
) as v(title, description, level, duration, students_count, rating, image_emoji, technologies, popular)
where not exists (select 1 from public.courses);

-- Seed resource categories
with inserted as (
  insert into public.resource_categories (title, icon_key, color_key)
  select * from (
    values
      ('Documentation & Guides','file','primary'),
      ('Video Tutorials','video','accent'),
      ('Code Templates','code','success')
  ) as v(title, icon_key, color_key)
  where not exists (select 1 from public.resource_categories)
  returning id, title
)
-- Seed resources
insert into public.resources (category_id, name, type, downloads, recent, link)
select c.id, r.name, r.type, r.downloads, r.recent, null
from inserted c
join (
  values
    ('Documentation & Guides','React Best Practices','Guide',12500,true),
    ('Documentation & Guides','JavaScript ES6+ Reference','Cheatsheet',8200,false),
    ('Documentation & Guides','API Design Patterns','Documentation',5700,true),
    ('Video Tutorials','Advanced React Hooks','Tutorial Series',15200,true),
    ('Video Tutorials','Docker for Beginners','Workshop',9800,false),
    ('Video Tutorials','Machine Learning Basics','Course Preview',11300,true),
    ('Code Templates','Full-Stack Starter Kit','Template',6400,true),
    ('Code Templates','REST API Boilerplate','Template',4100,false),
    ('Code Templates','Mobile App Template','Template',3900,true)
) as r(category_title, name, type, downloads, recent)
  on r.category_title = c.title
where not exists (select 1 from public.resources);

-- Seed live events
insert into public.live_events (title, start_at, speaker, attendees_count, type)
select * from (
  values
    ('Advanced TypeScript Workshop', (now() + interval '7 days')::timestamptz, 'Sarah Chen', 250, 'Workshop'),
    ('Career in AI/ML Panel', (now() + interval '10 days')::timestamptz, 'Tech Leaders', 500, 'Panel'),
    ('Open Source Contribution', (now() + interval '12 days')::timestamptz, 'Alex Kumar', 180, 'Meetup')
) as v(title, start_at, speaker, attendees_count, type)
where not exists (select 1 from public.live_events);
