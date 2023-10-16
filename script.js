document.addEventListener('DOMContentLoaded', function() {
    const filterForm = document.getElementById('filterForm');
    const resultsDiv = document.getElementById('results');

    filterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const maxYear = parseInt(document.getElementById('maxYear').value, 10);

        // Read the JSON data from "output.json" (local file)
        fetch('output.json')
            .then(response => response.json())
            .then(data => {
                // Filter the data based on the "Years" field
                const filteredData = data.filter(item => item.Years < maxYear);

                resultsDiv.innerHTML = '';

                if (filteredData.length === 0) {
                    resultsDiv.textContent = 'No matching items found.';
                } else {
                    filteredData.forEach(item => {
                        const itemElement = document.createElement('p');
                        itemElement.textContent = `Authors: ${item.Authors}, Title: ${item.Title}, Cities: ${item.Cities}, Publisher: ${item.Publisher}, Years: ${item.Years}, Fund: ${item.Fund}, Segni: ${item.Segni}, Category: ${item.Category},`;
                        resultsDiv.appendChild(itemElement);
                    });
                }
            })
            .catch(error => {
                console.error('Error fetching JSON data:', error);
            });
    });
});
