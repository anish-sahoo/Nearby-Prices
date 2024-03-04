-- get cheapest listing for each item
SELECT 
  i.item_id, 
  i.item_name, 
  p.store_id, 
  s.name AS store_name, 
  g.latitude, 
  g.longitude AS store_name, 
  c.category_name, 
  p.price
FROM items AS i
  JOIN (
    SELECT item_id, store_id, MIN(price) AS price
    FROM prices
    GROUP BY item_id
  ) AS p ON p.item_id = i.item_id
  JOIN Categories AS c ON c.category_id = i.category_id
  JOIN Stores AS s ON s.store_id = p.store_id
  LEFT JOIN Geolocation AS g ON s.location_id = g.location_id
ORDER BY i.item_id ASC;

-- Expected Output (first few lines):
-- item_id	item_name	store_id	store_name	latitude	store_name	category_name	price
-- 1	Muffins - Assorted	221	Trudeo	32.650887	101.505519	condiment	16.77
-- 2	Ice - Clear, 300 Lb For Carving	904	LiveZ	48.2216277	6.4359118	condiment	6.21
-- 4	Ecolab - Orange Frc, Cleaner	345	Mydeo	7.897581	123.768678	produce	10.08
-- 5	Pastry - Lemon Danish - Mini	591	Demivee	14.1234415	-86.8697068	snacks	2.07
-- 11	Sauce - Chili	162	Quaxo	43.918776	125.2907021	condiment	10.71
-- 15	Lettuce - Sea / Sea Asparagus	95	Kamba	-31.485706	-64.2129282	condiment	18.77
