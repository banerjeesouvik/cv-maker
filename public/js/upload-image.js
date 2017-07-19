
if(window.File && window.FileReader){
  $('#picture').change(function (e) {
    var file = e.target.files[0];
    console.log(e.target.files);
    if(file.type.indexOf('image') == 0){
      var reader = new FileReader();
      console.log(file.type);
      reader.onload = function (e) {
          $('#picture-box').css('background-image', 'url(' + e.target.result + ')');
          drawToCanvas(e.target.result);
      }
      reader.readAsDataURL(file);
    }
  });
}else{
  console.log('Cannot upload file');
}
function drawToCanvas(url){
  var canvas = document.getElementById('resize');
  var ctx = canvas.getContext('2d');

  var image = new Image;
  image.onload = function () {
    canvas.height = image.width;
    canvas.width = image.width;
    console.log(image.width + '' + image.height);
    ctx.drawImage(image, 0, 0, 1000,1000);
  };
  image.src = url;
}
