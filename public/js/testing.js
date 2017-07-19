<<<<<<< HEAD
var pin=document.getElementById('zip');
var btn=document.getElementById('btn');

function fill_address(data){
    var city=document.getElementById('city');
    var state=document.getElementById('state');
    var country=document.getElementById('country');

    city.value=data.Circle;
    state.value=data.State;
    country.value=data.Country;
}

btn.onclick=function(){
  var xhr=new XMLHttpRequest();
  xhr.onreadystatechange= function(){
    if(xhr.readyState===XMLHttpRequest.DONE){
      if(xhr.status===200){
        var responseText=JSON.parse(xhr.responseText);
        if(responseText.Status=='Success'){
          //alert('Data Fetched Succesfully');
          fill_address(responseText.PostOffice[0]);
        }
        else
          alert('Invalid Pincode');
      }
      else
        alert('Some error occurred during data fetch');
    }
  }
  xhr.open('POST','http://localhost:3000/pincode',true);
  xhr.setRequestHeader('Content-Type','application/json');
  xhr.send(JSON.stringify({pincode: pin.value}));

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
