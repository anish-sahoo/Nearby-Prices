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
      WHEN COUNT(*) <= 1 THEN 'Low Inventory'
      WHEN COUNT(*) <= 3 THEN 'Medium Inventory'
      ELSE 'High Inventory'
  END AS inventory_size
FROM Prices AS p
  JOIN Stores AS s ON p.store_id = s.store_id
GROUP BY s.store_id
ORDER BY total_value DESC;

-- advanced query