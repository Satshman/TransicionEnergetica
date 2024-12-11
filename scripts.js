document.getElementById('query1').addEventListener('submit', async function (e) {
    e.preventDefault();
    const year = document.getElementById('year1').value;

    try {
        const response = await fetch('/api/query1', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ year }),
        });

        if (!response.ok) throw new Error('Error en la consulta');

        const results = await response.json();
        const tableBody = document.getElementById('result1');
        tableBody.innerHTML = results
            .map(
                (row) => `
            <tr>
                <td>${row.Region}</td>
                <td>${row.Wind || 0}</td>
                <td>${row.Hydro || 0}</td>
            </tr>
        `
            )
            .join('');
    } catch (err) {
        console.error('Error:', err);
    }
});

document.getElementById('query2').addEventListener('submit', async function (e) {
    e.preventDefault();
    const year = document.getElementById('year1').value;

    try {
        const response = await fetch('/api/query2', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ year }),
        });

        if (!response.ok) throw new Error('Error en la consulta');

        const results = await response.json();
        const tableBody = document.getElementById('result2');
        tableBody.innerHTML = results
            .map(
                (row) => `
            <tr>
                <td>${row.Region}</td>
                <td>${row.Wind || 0}</td>
                <td>${row.Hydro || 0}</td>
            </tr>
        `
            )
            .join('');
    } catch (err) {
        console.error('Error:', err);
    }
});

document.getElementById('query3').addEventListener('submit', async function (e) {
    e.preventDefault();
    const year = document.getElementById('year1').value;

    try {
        const response = await fetch('/api/query3', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ year }),
        });

        if (!response.ok) throw new Error('Error en la consulta');

        const results = await response.json();
        const tableBody = document.getElementById('result3');
        tableBody.innerHTML = results
            .map(
                (row) => `
            <tr>
                <td>${row.Region}</td>
                <td>${row.Wind || 0}</td>
                <td>${row.Hydro || 0}</td>
            </tr>
        `
            )
            .join('');
    } catch (err) {
        console.error('Error:', err);
    }
});

document.getElementById('query4').addEventListener('submit', async function (e) {
    e.preventDefault();
    const year = document.getElementById('year1').value;

    try {
        const response = await fetch('/api/query4', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ year }),
        });

        if (!response.ok) throw new Error('Error en la consulta');

        const results = await response.json();
        const tableBody = document.getElementById('result4');
        tableBody.innerHTML = results
            .map(
                (row) => `
            <tr>
                <td>${row.Region}</td>
                <td>${row.Wind || 0}</td>
                <td>${row.Hydro || 0}</td>
            </tr>
        `
            )
            .join('');
    } catch (err) {
        console.error('Error:', err);
    }
});

document.getElementById('query5').addEventListener('submit', async function (e) {
    e.preventDefault();
    const year = document.getElementById('year1').value;

    try {
        const response = await fetch('/api/query5', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ year }),
        });

        if (!response.ok) throw new Error('Error en la consulta');

        const results = await response.json();
        const tableBody = document.getElementById('result5');
        tableBody.innerHTML = results
            .map(
                (row) => `
            <tr>
                <td>${row.Region}</td>
                <td>${row.Wind || 0}</td>
                <td>${row.Hydro || 0}</td>
            </tr>
        `
            )
            .join('');
    } catch (err) {
        console.error('Error:', err);
    }
});