SELECT 
    r.Year,
    r.Entity AS Region,
    r.`Renewables (% electricity)` AS Total_Renewables,
    s.`Solar (% electricity)` AS Solar,
    w.`Wind (% electricity)` AS Wind,
    h.`Hydro (% electricity)` AS Hydro
FROM share_electricity_renewables r
LEFT JOIN share_electricity_solar s ON r.Entity = s.Entity AND r.Year = s.Year
LEFT JOIN share_electricity_wind w ON r.Entity = w.Entity AND r.Year = w.Year
LEFT JOIN share_electricity_hydro h ON r.Entity = h.Entity AND r.Year = h.Year
