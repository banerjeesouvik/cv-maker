$(document).ready(function(){
  function fill_address(data){
      if(data.Circle != 'NA')
        $('#city').val(data.Circle);
      if(data.District != 'NA')
        $('#dist').val(data.District);
  }

  $('#zip').on('keyup',function(){
    if(this.value.length==6){
      $('#pin_status').css('color','green').text('Validating...');
      //console.log($('#zip').val());
      $.ajax({
        url: '/pincode',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({pincode: $('#zip').val()})
      }).done(function(data){
          //console.log(JSON.parse(data));
          var data_json = JSON.parse(data);
          if(data_json.Status == 'Success'){
            fill_address(data_json.PostOffice[0]);
            $('#pin_status').css('color','green').text('Valid Pincode. Address autofilled.');
            $('input:disabled').prop('disabled',false);
          }
          else {
            $('#pin_status').css('color','red').text('Invalid Pincode');
            $('input:disabled').prop('disabled',true);
          }
        })
        .fail(function(){
          //console.log('Some error occurred during data fetch');
          $('#pin_status').css('color','red').text('Error in address fetch');
        })
    }
  });
});
