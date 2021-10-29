DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    user_id serial PRIMARY KEY,
    email text PRIMARY KEY,
);