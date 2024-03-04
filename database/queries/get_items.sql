-- get cheapest price for each item
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

-- one must contain a subquery