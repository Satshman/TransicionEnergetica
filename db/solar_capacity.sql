SELECT 
    Year,
    SUM(`Solar Capacity`) AS Total_Solar_Capacity
FROM installed_solar_pv_capacity
GROUP BY Year
ORDER BY Year ASC;
