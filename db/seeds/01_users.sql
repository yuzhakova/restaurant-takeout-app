-- Insert tables records
/*
NY notes:
populated 4 TABLES with:
- users
- menu_items
- orders
- ordered_items
*/

INSERT INTO users (name, email, password, phone, role)
  VALUES ('Natalia', 'natalia.yuzhakova@gmail.com', 'password', '+16048805245', 'customer'),
  ('Natalia', 'natalia@gmail.com', 'password', '+16048805245', 'customer'),
  ('Natalia', 'yuzhakova@gmail.com', 'password', '+16048805245', 'customer');

INSERT INTO orders (user_id, order_time, wait_time, order_status, pickup_time, customer_notes)
  VALUES ('1', '07/25/2020, 11:30 AM', 15, 'complete', '07/25/2020, 11:45 AM', 'extra dressing'),
  ('2', '07/25/2020, 11:30 AM', 15, 'complete', '07/25/2020, 11:45 AM', 'extra dressing'),
  ('3', '07/25/2020, 11:30 AM', 15, 'complete', '07/25/2020, 11:45 AM', 'extra dressing');

INSERT INTO menu_items (name, thumbnail_url, price, description, category)
  VALUES ('Roots Salad', 'url', 8.99, 'garden salad mix with seasonal vegetables and balsamic venegraitte', 'appetizer'),
          ('Roots Salad', 'url', 8.99, 'garden salad mix with seasonal vegetables and balsamic venegraitte', 'appetizer'),
          ('Roots Salad', 'url', 8.99, 'garden salad mix with seasonal vegetables and balsamic venegraitte', 'appetizer');


INSERT INTO ordered_items (order_id, menu_item_id, qty)
  VALUES (1, 1, 2),
          (2, 2, 2),
          (3, 3, 2);

