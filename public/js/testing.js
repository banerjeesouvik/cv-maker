var pin=document.getElementById('zip');

function fill_address(data){
    var city=document.getElementById('city');
    var dist=document.getElementById('dist');
    var state=document.getElementById('state');
    var country=document.getElementById('country');

    if(data.Circle!='NA')
      city.value=data.Circle;
    if(data.District!='NA')
      dist.value=data.District;
    if(data.State!='NA')
      state.value=data.State;
    if(data.Country!='NA')
      country.value=data.Country;
}

pin.onchange=function(){
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
}
