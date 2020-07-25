-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

/*
NY notes:
I will create 4 TABLES here:
- users
- menu_items
- orders
- ordered_items
*/

