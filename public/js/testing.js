$(document).ready(function(){
  $('#zip').on({
    'focusout':function(){
      var value= $(this).val().replace(/[^\d\.]/g, '');
      $(this).val(value);
      if(value.length == 6){
        $('#pin_status').css('color','green').text('Validating...');
        ajax_call(value);
      }
      else {
        disable_field();
      }
    },
    'keyup':function () {
      var value= $(this).val().replace(/[^\d\.]/g, '');
      $(this).val(value);
      if(value.length == 6){
        $('#pin_status').css('color','green').text('Validating...');
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
      //console.log(JSON.parse(data));
      var data_json = JSON.parse(data);
      if(data_json.Status == 'Success'){
        fill_address(data_json.PostOffice[0]);
        $('#pin_status').css('color','green').text('Valid Pincode. Address autofilled.');
        $('input:disabled').prop('disabled',false);
        $('#city').focus();
      }
      else {
        disable_field();
      }
    })
    .fail(function(){
      //console.log('Some error occurred during data fetch');
      $('#pin_status').css('color','red').text('Error in address fetch');
    })
}

function disable_field(){
  $('#pin_status').css('color','red').text('Invalid Pincode');
  $('#zip').focus();
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
