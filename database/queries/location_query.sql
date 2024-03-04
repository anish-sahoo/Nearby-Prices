SELECT
  s.store_id,
  s.name AS store_name,
  g.latitude,
  g.longitude,
  g.name_of_location
FROM Stores s
  JOIN Geolocation g ON s.location_id = g.location_id
WHERE
  g.latitude BETWEEN 38.852 AND 36.893
  AND g.longitude BETWEEN -121.208
  AND -123.532;