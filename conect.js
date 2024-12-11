document.getElementById("query1").addEventListener("submit", async (e) => {
    e.preventDefault();
    const year = document.getElementById("year1").value;
    try {
        const response = await fetch("http://localhost:3000/query1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ year }),
        });
        const data = await response.json();
        const resultsTable = document.getElementById("result1");
        resultsTable.innerHTML = data.results
            .map(row => `<tr><td>${row.region}</td><td>${row.source}</td><td>${row.production}</td></tr>`)
            .join("");
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
});
