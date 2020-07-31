-- Insert tables records
/*
NY notes:
populated 4 TABLES with:
- users
- menu_items
- orders
- ordered_items
*/

INSERT INTO menu_items (name, thumbnail_url, price, description, category)
  VALUES ('Roasted Asparagus with Parmesan', 'https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/1-main-asparagus.jpg', 899, 'Roasted asparagus with leafy greens sprinkled with parmesan.', 'main'),
          ('Buddha Bowl', 'https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/1-main-buddha-bowl.jpg', 999, 'Macro and micronutrients all in one bowl.', 'main'),
          ('Hearty Chickpea Bowl', 'https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/1-main-chickpea-bowl.jpg', 999, 'Hearty chickpeas with a rainbow of vegetables.', 'main'),
          ('Shiitake Tagliatelle', 'https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/1-main-shiitake-tagliatelle.jpg', 999, 'Mushrooms lovers paradise, meaty shiitake with house made pasta in cream sauce.', 'main'),
          ('Zoodles & Spinach', 'https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/1-main-spinach-yo.jpg', 899, 'Zucchini noodles, spinach, radishes and avocado are starring in this masterpiece.', 'main'),
          ('Veggie Balls', 'https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/1-main-veggie-balls.jpg', 899, 'Veggie balls on a bed of leafy greens.', 'main'),
          ('Butternut Squash Soup', 'https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/2-soup-butternut-squash.jpg', 799, 'Butternut squash cream soup.', 'soup'),
          ('Tom Yum', 'https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/2-soup-veg-tom-yum.jpg', 799, 'Vegan version of our favourite Thai soup.', 'soup'),
          ('Cheesecake', 'https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/3-dessert-cheesecake.jpg', 599, 'Best cheesecake in town, voted by our loyal customers.', 'dessert'),
          ('Fruit Plate', 'https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/3-dessert-fruit.jpg', 499, 'Can never go wrong with fresh fruit and berry seasonal selection.', 'dessert'),
          ('Lemon Square', 'https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/3-dessert-lemon-square.jpg', 399, 'Zesty lemon bar handcrafted by our pastry chef.', 'dessert');

INSERT INTO orders (name, phone, customer_notes)
  VALUES ('Sandy', '6048805245', 'extra dressing'),
  ('Sandy', '6048805245', 'extra dressing'),
  ('Sandy', '6048805245', 'no cutlery');

INSERT INTO ordered_items (order_id, menu_item_id, menu_item_name, qty)
  VALUES (2, 2, 'Buddha Bowl', 2),
          (2, 4,'Shiitake Tagliatelle', 2),
          (3, 9, 'Cheesecake', 2);
