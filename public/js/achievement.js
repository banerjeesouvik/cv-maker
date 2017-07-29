$(document).ready(function () {
  $('#achievement-desc').on({
    'keyup': function (e) {
      if(e.which == 13){
        var desc = this.value;
        desc = desc + String.fromCharCode(13, 10004, 32);
        $(this).val(desc);
      }
    },
    'focus': function () {
      if(this.value == '')
        $(this).val(String.fromCharCode(10004, 32));
    },
    'focusout': function () {
      if(this.value == String.fromCharCode(10004, 32))
        $(this).val('');
    }
  })
});
