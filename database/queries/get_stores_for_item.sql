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

-- gets the top 5 stores that have the item with the lowest price
-- 11 is a filler value for the item_id