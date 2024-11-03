document.getElementById('locationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const zipCode = document.getElementById('zipCode').value;

    const response = await fetch('/.netlify/functions/getCandidates', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ zipCode }),
    });

    const data = await response.json();
    document.getElementById('results').innerText = JSON.stringify(data, null, 2);
});
