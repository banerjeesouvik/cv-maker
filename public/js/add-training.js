var count = 1;
$('#add-training').click(function (e) {
  e.preventDefault();
  $('#page-loading').show();
  var newTraining = $(`<div class="training" id="new-training-${count++}" style="display:none"></div>`);
  var lastTraining = $('.training:last');
  lastTraining.after(newTraining);
  $('.training:last').load('../pages/training.html');
});
$('input[type="checkbox"]').click(function () {
  if(this.checked)
    $('input[name="end_date"]').val('Present');
  else {
    $('input[name="end_date"]').val('');
  }
});
$(document.body).on('click', '.delete-training', function () {
  $(this).parent().fadeOut(1000);
  var totalHeight = $('#training-form').innerHeight();
  var lastTabHeight = $('.training:last').innerHeight();
  var scrollHeight = totalHeight - lastTabHeight * 2;
  setTimeout( function () {
    $("#main-tab").animate({ scrollTop: scrollHeight * 0.98 }, 1000);
  }, 1000);
});
