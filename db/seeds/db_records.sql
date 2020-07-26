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
  VALUES ('Roasted Asparagus with Parmesan', 'https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/1-main-asparagus.jpg', 8.99, 'Roasted asparagus with leafy greens sprinkled with parmesan.', 'main'),
          ('Buddha Bowl', 'https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/1-main-buddha-bowl.jpg', 9.99, 'Macro and micronutrients all in one bowl.', 'main'),
          ('Hearty Chickpea Bowl', 'https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/1-main-chickpea-bowl.jpg', 9.99, 'Hearty chickpeas with a rainbow of vegetables.', 'main'),
          ('Shiitake Tagliatelle', 'https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/1-main-shiitake-tagliatelle.jpg', 9.99, 'Mushrooms lovers paradise, meaty shiitake with house made pasta in cream sauce.', 'main'),
          ('Zoodles & Spinach', 'https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/1-main-spinach-yo.jpg', 8.99, 'Zucchini noodles, spinach, radishes and avocado are starring in this masterpiece.', 'main'),
          ('Veggie Balls', 'https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/1-main-veggie-balls.jpg', 8.99, 'Veggie balls on a bed of leafy greens.', 'main'),
          ('Butternut Squash Soup', 'https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/2-soup-butternut-squash.jpg', 7.99, 'Butternut squash cream soup.', 'soup'),
          ('Tom Yum', 'https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/2-soup-veg-tom-yum.jpg', 7.99, 'Vegan version of our favourite Thai soup.', 'soup'),
          ('Cheesecake', 'https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/3-dessert-cheesecake.jpg', 5.99, 'Best cheesecake in town, voted by our loyal customers.', 'dessert'),
          ('Fruit Plate', 'https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/3-dessert-fruit.jpg', 4.99, 'Can never go wrong with fresh fruit and berry seasonal selection.', 'dessert'),
          ('Lemon Square', 'https://github.com/yuzhakova/restaurant-takeout-app/blob/master/public/images/3-dessert-lemon-square.jpg', 3.99, 'Zesty lemon bar handcrafted by our pastry chef.', 'dessert');

INSERT INTO ordered_items (order_id, menu_item_id, qty)
  VALUES (1, 1, 2),
          (2, 2, 2),
          (3, 3, 2);

