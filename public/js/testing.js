$(document).ready(function(){
  $('#zip').on({
    'focusout':function(){
      var value= $(this).val().replace(/[^\d\.]/g, '');
      $(this).val(value);
      if(value.length == 6){
        $('#pin_status').css('background-image', 'url("../images/icons/loading.gif")');
        ajax_call(value);
      }
      else
        if(value.length != 0){
        disable_field();
      }
    },
    'keyup':function () {
      var value= $(this).val().replace(/[^\d\.]/g, '');
      $(this).val(value);
      if(value.length == 6){
        $('#pin_status').css({
          'visibility': 'visible',
          'background-image': 'url("../images/icons/loading.gif")'
        });
        ajax_call(value);
      }
      else if (value.length > 6) {
        value=value.substr(0,6);
        $(this).val(value);
      }
    }});
});

function ajax_call(value) {
  $.ajax({
    url: '/pincode',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({pincode: value})
  }).done(function(data_json){
      if(data_json.status == 'Success'){
        $('#pin_status').css('background-image', 'url("../images/icons/check1.png")');
        fill_address(data_json);
        $('input:disabled').prop('disabled', false);
        $('#city').focus();
      }
      else {
        disable_field();
      }
    })
    .fail(function(){
      $('#pin_status').css('background-image', 'url("../images/icons/error.png")');
    });
}

function disable_field(){
  $('#pin_status').css('background-image', 'url("../images/icons/error.png")');
  $('#zip').focus();
  $('#city').val('');
  $('#dist').val('');
  $('#state').val('');
  $('#country').val('');
}
function fill_address(data){
    if(data.city != 'NA')
      $('#city').val(data.city);
    if(data.dist != 'NA')
      $('#dist').val(data.dist);
    $('#state').val(data.state);
    $('#country').val(data.country);
}
