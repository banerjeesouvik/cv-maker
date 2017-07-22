var count = 1;
$('#add-education').click(function (e) {
  e.preventDefault();
  $('#loading').css('visibility', 'visible');
  var newCourse = $(`<div class="education" id="new-education-${count++}"></div>`);
  newCourse.load('../pages/new-course.html');
  newCourse.css('visibility', 'hidden');
  var lastCourse = $('.education:last');
  lastCourse.after(newCourse);
  $('#main-tab').ready(function () {
    $('#loading').css('visibility', 'hidden');
    $('.education:last').css('visibility', 'visible');
    setTimeout(function () {
      $('span #cgpa:last').addClass('score-active');
    }, 50);
  });
});
