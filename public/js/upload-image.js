if(window.File && window.FileReader){
  $('#picture').change(function (e) {
    var file = e.target.files[0];
    if(file.size >= 1024 * 1024 * 2){
      $('#messageBox').show();
      return $('#message').text("Choose a lower quality image.");
    }
    $('#messageBox').hide();
    if(file.type.indexOf('image') == 0){
      var reader = new FileReader();
      reader.onload = function (e) {
        x = 0, y =0;
        $('#loading').show();
        drawToCanvas(e.target.result);
        $('#resize').ready(function () {
            $('#loading').hide();
          var canvas = document.getElementById('resize');
          var url = canvas.toDataURL('image/png');
          $('#picture-box').css('background-image', `url(${url})`);
          $('#canvas-holder').show();
          $('#infor').fadeOut(8000);
        });
      }
      reader.readAsDataURL(file);
    }
  });
}else{
  console.log('Cannot upload file');
}
var x = 0, y = 0, clipwidth, clipheight, min;
var canvas = document.getElementById('resize');
var ctx = canvas.getContext('2d');
var image = new Image;
function drawToCanvas(url){

  image.onload = function () {
    canvas.height = image.height;
    canvas.width = image.width;
    if(image.height <= image.width){
      min = image.height;
      clipheight = image.height;
      clipwidth = image.height;
      x = (image.width - image.height) / 2;
    }else{
      min = image.width;
      clipheight = image.width;
      clipwidth = image.width;
        y = (image.height - image.width) / 2;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, x, y, clipwidth, clipheight, 0, 0, canvas.width, canvas.height);
  };
  image.src = url;
}
