const fs = require('fs');

// Read the content of the "output.json" file
fs.readFile('output.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Parse the JSON data into a JavaScript array of objects
  const jsonData = data.split('\n')
    .filter(line => line.trim() !== '') // Remove empty lines
    .map(line => JSON.parse(line));

  // Filter items with "Years" less than 1960
  const itemsWithYearsLessThan1960 = jsonData.filter(item => item.Years < 1960);

  // Do something with the filtered items
  itemsWithYearsLessThan1960.forEach(item => {
    console.log(item.Authors, item.Title, item.Years);
  });
});
