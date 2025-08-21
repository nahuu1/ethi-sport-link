# Supabase seed scripts

This folder contains SQL seed scripts for the EUSA project.

seed_time_slots.sql
- Creates 6 one-hour time slots per day for the next 7 days for two facilities: `soccer-1` and `basketball-2`.

How to run
1) Using the Supabase dashboard SQL editor:
   - Open your Supabase project, go to the SQL editor, paste the contents of `seed_time_slots.sql`, and run.

2) Using psql (Postgres client):
   - Ensure you have the connection string for your Supabase database.
   - Run:

```bash
psql "postgresql://<db_user>:<db_pass>@<db_host>:5432/<db_name>" -f ./supabase/seed_time_slots.sql
```

3) Using the Supabase CLI:
   - Install the Supabase CLI and authenticate.
   - Use the SQL editor or run the SQL file against your database.

Notes
- The script uses `gen_random_uuid()`; enable `pgcrypto` if not present:

```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;
```

- Adjust facility IDs if your DB uses different identifiers.
