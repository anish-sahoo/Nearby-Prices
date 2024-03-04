-- returns the average prices of stores that have 
-- with a minimum price greater than 10


SELECT
  s.store_id,
  s.name AS store_name,
  ROUND(AVG(p.price), 2) AS average_price
FROM stores AS s
  JOIN prices AS p ON p.store_id = s.store_id
WHERE p.price > 10
GROUP BY s.store_id
HAVING MIN(p.price) > 10
ORDER BY average_price DESC;

-- one must be a group by with a having clause