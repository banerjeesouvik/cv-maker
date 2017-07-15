const express = require('express');
var app = express();
const path = require('path');
const publicPath = path.join(__dirname, './public');
app.use(express.static(publicPath));
app.listen(3000, () =>{
  console.log('Server deployed on port 3000');
})
