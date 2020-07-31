##Simplified database:

            List of relations
 Schema |     Name      | Type  | Owner  
--------+---------------+-------+--------
 public | menu_items    | table | labber
 public | ordered_items | table | labber
 public | orders        | table | labber


midterm=> SELECT * FROM orders;
 id | name  |   phone    | customer_notes 
----+-------+------------+----------------
  1 | Sandy | 6048805245 | extra dressing
  2 | Sandy | 6048805245 | extra dressing
  3 | Sandy | 6048805245 | no cutlery
(3 rows)

midterm=> SELECT * FROM ordered_items;
 id | order_id | menu_item_id |    menu_item_name    | qty 
----+----------+--------------+----------------------+-----
  1 |        2 |            2 | Buddha Bowl          |   2
  2 |        2 |            4 | Shiitake Tagliatelle |   2
  3 |        3 |            9 | Cheesecake           |   2


midterm=> SELECT * FROM menu_items;

 id |              name               |                                                      thumbnail_url                                                      | price |                                    description                                    | category 
----+---------------------------------+-------------------------------------------------------------------------------------------------------------------------+-------+-----------------------------------------------------------------------------------+----------
  1 | Roasted Asparagus with Parmesan | https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/1-main-asparagus.jpg            |   899 | Roasted asparagus with leafy greens sprinkled with parmesan.                      | main
  2 | Buddha Bowl                     | https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/1-main-buddha-bowl.jpg          |   999 | Macro and micronutrients all in one bowl.                                         | main
  3 | Hearty Chickpea Bowl            | https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/1-main-chickpea-bowl.jpg        |   999 | Hearty chickpeas with a rainbow of vegetables.                                    | main
  4 | Shiitake Tagliatelle            | https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/1-main-shiitake-tagliatelle.jpg |   999 | Mushrooms lovers paradise, meaty shiitake with house made pasta in cream sauce.   | main
  5 | Zoodles & Spinach               | https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/1-main-spinach-yo.jpg           |   899 | Zucchini noodles, spinach, radishes and avocado are starring in this masterpiece. | main
  6 | Veggie Balls                    | https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/1-main-veggie-balls.jpg         |   899 | Veggie balls on a bed of leafy greens.                                            | main
  7 | Butternut Squash Soup           | https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/2-soup-butternut-squash.jpg     |   799 | Butternut squash cream soup.                                                      | soup
  8 | Tom Yum                         | https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/2-soup-veg-tom-yum.jpg          |   799 | Vegan version of our favourite Thai soup.                                         | soup
  9 | Cheesecake                      | https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/3-dessert-cheesecake.jpg        |   599 | Best cheesecake in town, voted by our loyal customers.                            | dessert
 10 | Fruit Plate                     | https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/3-dessert-fruit.jpg             |   499 | Can never go wrong with fresh fruit and berry seasonal selection.                 | dessert
 11 | Lemon Square                    | https://raw.githubusercontent.com/yuzhakova/restaurant-takeout-app/master/public/images/3-dessert-lemon-square.jpg      |   399 | Zesty lemon bar handcrafted by our pastry chef. 

##Originally intended database:

<!-- midterm=> \dt
            List of relations
 Schema |     Name      | Type  | Owner  
--------+---------------+-------+--------
 public | menu_items    | table | labber
 public | ordered_items | table | labber
 public | orders        | table | labber
 public | users         | table | labber


SELECT * FROM menu_items;
 id |    name     | thumbnail_url | price |                            description                             | category  
----+-------------+---------------+-------+--------------------------------------------------------------------+-----------
  1 | Roots Salad | url           |     9 | garden salad mix with seasonal vegetables and balsamic venegraitte | appetizer
  2 | Roots Salad | url           |     9 | garden salad mix with seasonal vegetables and balsamic venegraitte | appetizer
  3 | Roots Salad | url           |     9 | garden salad mix with seasonal vegetables and balsamic venegraitte | appetizer


SELECT * FROM ordered_items;
 id | order_id | menu_item_id | qty 
----+----------+--------------+-----
  1 |        1 |            1 |   2
  2 |        2 |            2 |   2
  3 |        3 |            3 |   2


SELECT * FROM orders;
 id | user_id |      order_time      | wait_time | order_status |     pickup_time      | customer_notes 
----+---------+----------------------+-----------+--------------+----------------------+----------------
  1 |       1 | 07/25/2020, 11:30 AM |        15 | complete     | 07/25/2020, 11:45 AM | extra dressing
  2 |       2 | 07/25/2020, 11:30 AM |        15 | complete     | 07/25/2020, 11:45 AM | extra dressing
  3 |       3 | 07/25/2020, 11:30 AM |        15 | complete     | 07/25/2020, 11:45 AM | extra dressing


SELECT * FROM users;
 id |  name   |            email            | password |    phone     |   role   
----+---------+-----------------------------+----------+--------------+----------
  1 | Natalia | natalia.yuzhakova@gmail.com | password | +16048805245 | customer
  2 | Natalia | natalia@gmail.com           | password | +16048805245 | customer
  3 | Natalia | yuzhakova@gmail.com         | password | +16048805245 | customer
 -->
