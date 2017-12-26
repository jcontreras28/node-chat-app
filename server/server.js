const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicPath));

const port = process.env.PORT || 3000

// routes go here

//


app.listen(port,() => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};