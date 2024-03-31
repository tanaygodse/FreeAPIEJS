const express = require('express');
const app = express();
const routes = require('./routes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', routes);

const PORT = process.env.PORT || 3000;
let server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
