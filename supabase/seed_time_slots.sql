-- seed_time_slots.sql
-- Seed script: create 6 one-hour time slots per day for two facilities
-- Facilities used in the app: 'soccer-1' and 'basketball-2'
-- This script creates slots for the next 7 days (including today), 08:00-14:00 (6 slots: 08-09 ... 13-14).

-- Notes:
-- 1) The script uses gen_random_uuid() for id. If your database does not have pgcrypto enabled,
--    enable it with: CREATE EXTENSION IF NOT EXISTS pgcrypto;
-- 2) Adjust facility ids, sport ids, price, or date range as needed for your environment.

BEGIN;

-- Ensure pgcrypto extension (for gen_random_uuid)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

WITH facilities AS (
  SELECT * FROM (VALUES
    ('soccer-1'::text, 'soccer'::text),
    ('basketball-2'::text, 'basketball'::text)
  ) AS t(facility_id, sport_id)
), days AS (
  SELECT generate_series(current_date, current_date + interval '6 days', interval '1 day')::date AS day
)
INSERT INTO public.time_slots (id, facility_id, sport_id, start_time, end_time, price, created_at)
SELECT gen_random_uuid(), f.facility_id, f.sport_id,
       (d.day + time '08:00')::timestamptz, (d.day + time (format('%s:00', 9 + slot_num)))::timestamptz,
       0.0, now()
FROM facilities f
CROSS JOIN days d
CROSS JOIN LATERAL (
  SELECT generate_series(0,5) AS slot_num
) s;

COMMIT;

-- Example: to run from your machine using psql
-- psql "postgresql://<db_user>:<db_pass>@<db_host>:5432/<db_name>" -f ./supabase/seed_time_slots.sql

-- Or paste the contents into the Supabase SQL editor (in the Supabase dashboard) and run.
