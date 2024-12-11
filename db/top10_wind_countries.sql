SELECT 
    Entity AS Country,
    `Electricity from wind (TWh)` AS Wind_Production
FROM wind_generation
WHERE Year = ?
ORDER BY Wind_Production DESC
LIMIT 10;
