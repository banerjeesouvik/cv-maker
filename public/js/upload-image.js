if(window.File && window.FileReader){
  $('#picture').change(function (e) {
    var file = e.target.files[0];
    console.log(e.target.files);
    if(file.type.indexOf('image') == 0){
      var reader = new FileReader();
      console.log(file.type);
      reader.onload = function (e) {
          $('#picture-box').css('background-image', 'url(' + e.target.result + ')');
      }
      reader.readAsDataURL(file);
    }
  });
}else{
  console.log('Cannot upload file');
}
