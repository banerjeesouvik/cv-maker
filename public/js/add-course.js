var count = 1;
$('#add-education').click(function (e) {
  e.preventDefault();
  $('#page-loading').show();
  var newCourse = $(`<div class="education" id="new-education-${count++}"></div>`);
  newCourse.load('../pages/new-course.html');
  var lastCourse = $('.education:last');
  lastCourse.after(newCourse);
  $(document.body).ready( function () {
    $('#page-loading').hide();
    setTimeout( function () {
      console.log(`#${newCourse.attr('id')}`);
      $(`#${newCourse.attr('id')} #cgpa`).addClass('score-active');
    }, 200);
  });
});
