-- Users table seeds here (Example)

-- INSERT INTO users (name) VALUES ('Alice');
-- INSERT INTO users (name) VALUES ('Kira');

/*
NY notes:
I will populate 4 TABLES here by inserting records for:
- users
- menu_items
- orders
- ordered_items
*/

INSERT INTO users (name, email, password, phone, role)
  VALUES ('Natalia', 'natalia.yuzhakova@gmail.com', 'password', '+16048805245', 'customer');

INSERT INTO orders (uder_id, order_time, wait_time, order_status, pickup_time, customer_notes)
  VALUES ('10', '07/25/2020, 11:30 AM', 15, 'complete', '07/25/2020, 11:45 AM', 'extra dressing');

INSERT INTO menu_items (name, thumbnail_url, price, description, category)
  VALUES ('Roots Salad', url, 8.99, 'gardem salad mix with seasonal vegetables and balsamic venegraitte', 'appetizer');

INSERT INTO ordered_items (order_id, menu_item_id, qty)
  VALUES (10, 1, 2);

