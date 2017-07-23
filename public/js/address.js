var pin_valid=false;
$(document).ready(function(){
  $('#zip').on({
    'focusout':function(){
      var value= $(this).val().replace(/[^\d\.]/g, '');
      $(this).val(value);
      if((value.length == 6) && !pin_valid){
        $('#pin_status').removeClass('success fail').addClass('loading');
        ajax_call(value);
      }
      else if (value.length < 6) {
        disable_field();
      }
    },
    'keyup':function () {
      var value= $(this).val().replace(/[^\d\.]/g, '');
      $(this).val(value);
      if(value.length == 6){
        $('#pin_status').removeClass('success fail').addClass('loading');
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
  }).done(function(data){
      var data_json = JSON.parse(data);
      if(data_json.Status == 'Success'){
        fill_address(data_json.PostOffice[0]);
        pin_valid=true;
        $('#pin_status').removeClass('loading').addClass('success');
        $('input:disabled').prop('disabled',false);
        $('#city').focus();
      }
      else {
        disable_field();
      }
    })
    .fail(function(){
      $('#pin_status').css('color','red').text('Error during fetching address');
    })
}

function disable_field(){
  $('#pin_status').removeClass('loading success').addClass('fail');
  pin_valid=false;
  $('#city').val('');
  $('#dist').val('');
  $('#state').val('');
  $('#country').val('');
}
function fill_address(data){
    if(data.Circle != 'NA')
      $('#city').val(data.Circle);
    if(data.District != 'NA')
      $('#dist').val(data.District);
    $('#state').val(data.State);
    $('#country').val(data.Country);
}
