midterm=> \dt
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

