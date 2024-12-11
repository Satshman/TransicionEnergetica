SELECT 
    Entity AS Region,
     `Renewables (% electricity)` AS Renewables_Percentage
FROM share_electricity_renewables
ORDER BY Renewables_Percentage DESC;
