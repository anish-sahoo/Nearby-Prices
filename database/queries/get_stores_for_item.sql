-- gets the top 5 stores that have the item with the lowest price
-- 11 is a filler value for the item_id

SELECT 
  s.name AS store_name, 
  p.price AS price, 
  p.timestamp AS timestamp, 
  l.latitude AS latitude, 
  l.longitude AS longitude, 
  l.name_of_location AS address, 
  c.name AS culture_specialty, 
  e.expense_rating AS expense_rating
FROM Stores AS s
 JOIN Prices AS p ON s.store_id = p.store_id
 JOIN Geolocation AS l ON s.location_id = l.location_id
 LEFT JOIN CultureSpecialty AS c ON s.culture_specialty_id = c.id
 JOIN ExpenseRatings AS e ON s.expense_rating_id = e.expense_rating_id
WHERE p.item_id = 11
ORDER BY p.price ASC
LIMIT 5;

-- Expected Output (first few lines):
-- store_name	price	timestamp	latitude	longitude	address	culture_specialty	expense_rating
-- Quaxo	10.71	2024-02-28 21:39:37	43.918776	125.2907021	9888 Bartelt Drive	NULL	very expensive
-- Mycat	18.76	2024-02-28 21:39:37	-26.1164276	-49.8091065	6 Kinsman Lane	Asian	very expensive