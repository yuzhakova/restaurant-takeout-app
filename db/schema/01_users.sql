-- Drop and recreate Users table (Example)

-- DROP TABLE IF EXISTS users CASCADE;
-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL
-- );

/*
NY notes:
I will create 4 TABLES here:
- users
- menu_items
- orders
- ordered_items
*/

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS ordered_items CASCADE;

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  role TEXT NOT NULL
);

DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
order_time VARCHAR(255) NOT NULL, -- NOW()
wait_time INTEGER, -- should we delete it?
order_status TEXT NOT NULL,
pickup_time  VARCHAR(255) NOT NULL, -- NOW()
customer_notes TEXT NOT NULL
);

DROP TABLE IF EXISTS menu_items CASCADE;
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR (255) NOT NULL,
  thumbnail_url VARCHAR (255) NOT NULL,
  price INTEGER NOT NULL,
  description TEXT,
  category VARCHAR (255) NOT NULL,

DROP TABLE IF EXISTS ordered_items CASCADE;
CREATE TABLE ordered_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id NTEGER REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id INTEGER REFERENCES menu_items(id),
  qty INTEGER NOT NULL
);
