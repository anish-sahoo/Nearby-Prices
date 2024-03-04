SELECT
  s.store_id,
  s.name AS store_name,
  COALESCE(cs.name, 'No Specialty') AS specialty,
  g.latitude,
  g.longitude,
  g.name_of_location
FROM Stores s
  JOIN Geolocation g ON s.location_id = g.location_id
  RIGHT JOIN CultureSpecialty AS cs ON cs.id = s.culture_specialty_id
WHERE
  g.latitude BETWEEN 36 AND 38
  AND g.longitude BETWEEN -124
  AND -120;