-- get the average price of items per category, 
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

-- Expected Output (first few lines):
-- category_name	min_price	average_price	max_price	number_of_items	number_of_stores
-- misc	1.0	10.06	19.97	202	189
-- snacks	1.04	10.23	19.93	214	197
-- food	1.06	10.33	19.8	213	196
-- condiment	1.07	10.66	20.0	187	175
-- produce	1.06	10.67	19.93	184	157