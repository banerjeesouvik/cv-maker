var count = 1;
$('#add-education').click(function (e) {
  e.preventDefault();
  var newCourse = $(`<div class="education" id="new-education-${count++}"></div>`);
  newCourse.load('../pages/new-course.html');
  newCourse.css('visibility', 'hidden');
  var lastCourse = $('.education:last');
  lastCourse.after(newCourse);
  $('#main-tab').ready(function () {
    setTimeout(function () {
      $('span #cgpa:last').addClass('score-active');
    }, 50);
  });
});
