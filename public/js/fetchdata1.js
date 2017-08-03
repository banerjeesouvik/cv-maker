function getData(form) {
  var pagedata = newUser['get' + form] ();
  if(! $.isEmptyObject(pagedata)){
    $('input, select, textarea').each(function () {
      $(this).val(pagedata[0][$(this).attr('name')]);
    })
  }
}
