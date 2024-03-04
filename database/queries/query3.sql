-- get the average price of any item per category
SELECT 
  i.item_id, 
  i.item_name, 
  c.category_name, 
  AVG(p.price) AS average_price
FROM items AS i
  JOIN prices AS p ON p.item_id = i.item_id
  JOIN Categories AS c ON c.category_id = i.category_id
GROUP BY i.item_id, c.category_name
ORDER BY i.item_id ASC;