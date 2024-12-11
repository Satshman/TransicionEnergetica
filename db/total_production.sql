SELECT 
    Entity AS Region,
    SUM(`Electricity from wind (TWh)`) AS Wind,
    SUM(`Electricity from hydro (TWh)`) AS Hydro,
    SUM(`Electricity from solar (TWh)`) AS Solar,
    SUM(`Other renewables including bioenergy (TWh)`) AS Other_Renewables
FROM modern_renewable_prod
WHERE Year = ?
GROUP BY Entity;
