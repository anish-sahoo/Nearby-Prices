-- get the average price of any item per category, 
-- number of items per category, and the number of
-- stores that have items of that category
-- order by average price in ascending order

SELECT 
  c.category_name, 
  MIN(p.price) AS min_price,
  ROUND(AVG(p.price), 2) AS average_price,
  MAX(p.price) AS max_price,
  COUNT(i.item_id) AS number_of_items,
  COUNT(DISTINCT p.store_id) AS number_of_stores
FROM items AS i
  JOIN prices AS p ON p.item_id = i.item_id
  JOIN Categories AS c ON c.category_id = i.category_id
GROUP BY c.category_name
ORDER BY average_price ASC;