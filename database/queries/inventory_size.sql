-- Returns the total number of items
-- and the total value of items in each store, 
-- as well as the inventory size of each store.

-- 0,1,3 are filler values for the inventory size
-- please replace them with more appropriate values 
-- when querying a real dataset

SELECT
  s.store_id,
  s.name AS store_name,
  COUNT(*) AS total_items,
  SUM(p.price) AS total_value,
  CASE
      WHEN COUNT(*) = 0 THEN 'No Items'
      WHEN COUNT(*) <= 1 THEN 'Small Inventory'
      WHEN COUNT(*) <= 3 THEN 'Medium Inventory'
      ELSE 'Large Inventory'
  END AS inventory_size
FROM Prices AS p
  JOIN Stores AS s ON p.store_id = s.store_id
GROUP BY s.store_id
ORDER BY total_value DESC;

-- Expected Output (first few lines):
-- store_id	store_name	total_items	total_value	inventory_size
-- 387	Jatri	5	59.17	Large Inventory
-- 172	Dabfeed	4	55.97	Large Inventory
-- 749	Brightbean	5	54.68	Large Inventory
-- 876	Flashset	4	54.35	Large Inventory
-- 627	Livepath	5	53.74	Large Inventory
-- 962	Muxo	4	52.06	Large Inventory
-- 340	Kaymbo	3	50.52	Medium Inventory
-- 247	Aimbu	5	49.53	Large Inventory