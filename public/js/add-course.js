var count = 1;
$('#add-education').click(function (e) {
  e.preventDefault();
  $('#page-loading').show();
  var newCourse = $(`<div class="education" id="new-education-${count++}"></div>`);
  var lastCourse = $('.education:last');
  lastCourse.after(newCourse);
  //newCourse.load('../pages/new-course.html');
  $('.education:last').load('../pages/new-course.html');

  $(document.body).ready( function () {
    $('#page-loading').hide();
  });
});
