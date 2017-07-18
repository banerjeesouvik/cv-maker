
$('#zip').focusout(function () {
  var zipcode = $('#zip').val().trim();
  var url = `https://postalpincode.in/api/pincode/{zipcode}`;
  $.getJSON(url, function (json, status, obj) {
    if(status != "error"){
      console.log(json);
    }else{
      console.log(obj);
    }
  });
});
