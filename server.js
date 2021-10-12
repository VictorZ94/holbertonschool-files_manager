const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const status = require('./routes');

app.use(status);

app.listen(port);
console.log(`Server running on port ${port}`);

module.exports = app;
