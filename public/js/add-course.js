var count = 1;
$('#add-education').click(function (e) {
  e.preventDefault();
  $('#page-loading').show();
  var newCourse = $(`<div class="education" id="new-education-${count++}" style="display:none"></div>`);
  var lastCourse = $('.education:last');
  lastCourse.after(newCourse);
  $('.education:last').load('../pages/new-course.html');
});
$(document.body).on('click', '.delete-course', function () {
  $(this).parent().fadeOut(1000);
});
