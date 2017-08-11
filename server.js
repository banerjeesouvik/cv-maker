const express = require('express');
const request=require('request');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8000;

const publicPath = path.join(__dirname, './public');
app.use(express.static(publicPath));
app.use(bodyParser.json());

app.post('/pincode', function (req, res) {
  var pin = req.body.pincode;
  request(`http://postalpincode.in/api/pincode/${pin}`, function(error, response, body) {
	if(error) {
		return res.status(500).send(error);
	}
	if(response) {
    //console.log(JSON.stringify(body, undefined, 4));
    var data = JSON.parse(body);
    if(data.Status == 'Success'){
      res.status(response.statusCode).send({
        "status": data.Status,
        "city": data.PostOffice[0].Circle,
        "dist": data.PostOffice[0].District,
        "state": data.PostOffice[0].State,
        "country": data.PostOffice[0].Country
        });
    }else{
      res.send({'status' : 'failed'});
    }

	}
});

});

app.listen(port, () =>{
  console.log(`Server deployed on port ${port}`);
});
