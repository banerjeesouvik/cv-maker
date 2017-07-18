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
