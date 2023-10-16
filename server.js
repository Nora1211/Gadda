const express = require('express');
const app = express();
const fs = require('fs');

const port = 3000; // You can choose any available port

app.use(express.json());

app.get('/search', (req, res) => {
  const authorQuery = req.query.author;
  const titleQuery = req.query.title;

  // Read the JSON data from the file
  const jsonData = JSON.parse(fs.readFileSync('output.json', 'utf8'));

  const searchResults = jsonData.filter(item => {
    return (
      item.Authors.toLowerCase().includes(authorQuery.toLowerCase()) &&
      item.Title.toLowerCase().includes(titleQuery.toLowerCase())
    );
  });

  res.json(searchResults);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
