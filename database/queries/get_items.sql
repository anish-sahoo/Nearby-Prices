SELECT i.item_id, i.item_name, p.price
FROM items AS i
JOIN Prices AS p ON p.item_id = i.item_id
ORDER BY i.item_id ASC;


SELECT i.item_id, i.item_name, c.category_name, p.price
FROM items AS i
  JOIN (
    SELECT item_id, MIN(price) AS price
    FROM prices
    GROUP BY item_id
  ) AS p ON p.item_id = i.item_id
  JOIN Categories AS c ON c.category_id = i.category_id
ORDER BY i.item_id ASC;