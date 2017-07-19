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

$('#zip').focusout(function () {
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
  xhr.open('POST','/pincode',true);
  xhr.setRequestHeader('Content-Type','application/json');
  xhr.send(JSON.stringify({pincode: pin.value}));

});
