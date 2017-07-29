var count = 1;
$('#add-extra').click(function (e) {
  e.preventDefault();
  $('#page-loading').show();
  var newExperience = $(`<div class="experience" id="new-experience-${count++}" style="display:none"></div>`);
  var lastExperience = $('.experience:last');
  lastExperience.after(newExperience);
  $('.experience:last').load('../pages/experience.html');
});
$('input[type="checkbox"]').click(function () {
  if(this.checked)
    $('input[name="end_date"]').val('Present');
  else {
    $('input[name="end_date"]').val('');
  }
});
$(document.body).on('click', '.delete-experience', function () {
  $(this).parent().fadeOut(1000);
  var totalHeight = $('#experience-form').innerHeight();
  var lastTabHeight = $('.experience:last').innerHeight();
  var scrollHeight = totalHeight - lastTabHeight * 2;
  setTimeout( function () {
    $("#main-tab").animate({ scrollTop: scrollHeight * 0.98 }, 1000);
  }, 1000);
});
