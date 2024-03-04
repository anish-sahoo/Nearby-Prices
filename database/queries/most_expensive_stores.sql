-- returns the average prices of stores
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

-- Expected Output (first few lines):
-- store_id	store_name	average_price
-- 949	Muxo	19.97
-- 208	Tazz	19.9
-- 249	Browsezoom	19.8
-- 688	Avavee	19.74
-- 68	Meejo	19.69
-- 824	Livetube	19.68