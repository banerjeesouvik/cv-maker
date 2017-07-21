const express = require('express');
const request=require('request');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, './public');
app.use(express.static(publicPath));
app.use(bodyParser.json());

app.post('/pincode', function (req, res) {
  var pin=req.body.pincode;
  //console.log(pin);
  request(`http://postalpincode.in/api/pincode/${pin}`,function(error,response,body){
	if(error){
		res.status(500).send(error);
	}
	if(response){
		res.status(response.statusCode).send(body);
	}
  })

});

app.listen(port, () =>{
  console.log(`Server deployed on port ${port}`);
})
