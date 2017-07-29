var count = 1;
$('#add-internship').click(function (e) {
  e.preventDefault();
  $('#page-loading').show();
  var newInternship = $(`<div class="internship" id="new-internship-${count++}" style="display:none"></div>`);
  var lastInternship = $('.internship:last');
  lastInternship.after(newInternship);
  $('.internship:last').load('../pages/internship.html');
});
$('input[type="checkbox"]').click(function () {
  if(this.checked)
    $('input[name="end_date"]').val('Present');
  else {
    $('input[name="end_date"]').val('');
  }
});
$(document.body).on('click', '.delete-internship', function () {
  $(this).parent().fadeOut(1000);
  var totalHeight = $('#internship-form').innerHeight();
  var lastTabHeight = $('.internship:last').innerHeight();
  var scrollHeight = totalHeight - lastTabHeight * 2;
  setTimeout( function () {
    $("#main-tab").animate({ scrollTop: scrollHeight * 0.98 }, 1000);
  }, 1000);
});
