<<<<<<< HEAD
var pin=document.getElementById('zip');
var btn=document.getElementById('btn');

btn.onclick=function(){

  var request=new XMLHttpRequest();
  request.onreadystatechange= function(){
    if(request.readyState===XMLHttpRequest.DONE){
      if(request.status==200){
        alert('Data Fetched Succesfully');
        console.log(request.responseText);
        
      }
      else
        alert('Data fetch not successfull');
    }
  }
  request.open('GET','https://maps.googleapis.com/maps/api/geocode/json?address='+pin.value,true);
  request.send();
}
=======

$('#zip').focusout(function () {
  var zipcode = $('#zip').val().trim();
  var url = `https://postalpincode.in/api/pincode/${zipcode}`;
  $.getJSON(url, function (json, status, obj) {
    if(status != "error"){
      console.log(json);
    }else{
      console.log(obj);
    }
  });
});
>>>>>>> upstream/master
