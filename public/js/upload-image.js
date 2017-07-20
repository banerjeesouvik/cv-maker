
if(window.File && window.FileReader){
  $('#picture').change(function (e) {
    $('#resize').css('display','block');
    var file = e.target.files[0];
    if(file.type.indexOf('image') == 0){
      var reader = new FileReader();
      reader.onload = function (e) {
        drawToCanvas(e.target.result);
        $('#resize').ready(function () {
          var canvas = document.getElementById('resize');
          var url = canvas.toDataURL('image/png');
          $('#picture-box').css('background-image', `url(${url})`);
        });
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
    canvas.height = image.height;
    canvas.width = image.width;
    var x = 0, y = 0, clipwidth, clipheight;
    if(image.height <= image.width){
      clipheight = image.height;
      clipwidth = image.height;
      x = (image.width - image.height) / 2;
    }else{
      clipheight = image.width;
      clipwidth = image.width;
        y = (image.height - image.width) / 2;
    }
    ctx.drawImage(image, x, y, clipwidth, clipheight, 0, 0, canvas.width, canvas.height);
  };
  image.src = url;
}
