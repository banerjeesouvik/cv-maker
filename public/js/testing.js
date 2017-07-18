var pin=document.getElementById('zip');
var btn=document.getElementById('btn');

btn.onclick=function(){

  var request=new XMLHttpRequest();
  request.onreadystatechange= function(){
    if(request.readyState===XMLHttpRequest.DONE){
      if(request.status=='SUCCESS'){
        alert('You are registered successfully');
        
      }
      else if(request.status=='FAIL')
        alert('Either uername already exists or something went wrong. Please try again.');
    }
  }
  request.open('GET','http://postalpincode.in/api/pincode/'+pin.value,true);
  request.setRequestHeader('Content-Type','application/json');
  request.send();
}