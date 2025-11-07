const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (request, response) => {
  response.send('Hello World!');
});
app.post('/', (request, response) => {
  response.send('Got a POST request');
});
app.put('/user', (request, response) => {
  response.send('Got a PUT request at /user');
});
app.delete('/user', (request, response) => {
  response.send('Got a DELETE request at /user');
});

app.use(express.static('public'));
