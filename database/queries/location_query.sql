-- returns all the stores in the bay area and some details about them

SELECT
  s.store_id,
  s.name AS store_name,
  COALESCE(cs.name, 'Unknown/No Specialty') AS specialty,
  g.latitude,
  g.longitude,
  g.name_of_location
FROM Stores s
  JOIN Geolocation AS g ON s.location_id = g.location_id
  RIGHT JOIN CultureSpecialty AS cs ON cs.id = s.culture_specialty_id
WHERE
  g.latitude BETWEEN 36 AND 38 
  AND g.longitude BETWEEN -124 AND -120;

-- Expected Output (first few lines):
-- store_id	store_name	specialty	latitude	longitude	name_of_location
-- 1001	Bay Area Store 1	Asian	37.7749	-122.4194	Place in Bay Area 1
-- 1002	Bay Area Store 2	Colombian	37.74636	-122.17185	Place in Bay Area 2
-- 1003	Bay Area Store 3	African	37.67955	-122.154869	Place in Bay Area 3
-- 1004	Bay Area Store 4	European	37.67955	-122.154869	Place in Bay Area 3