var count = 1;
var topics = ['BasicInfo', 'Address', 'Photo', 'Education', 'Skill', 'Experience', 'Internship', 'Project', 'Training', 'Certification', 'Publication'];
var currentTopic = topics[currentPage];

$('#add-extra').click(function (e) {
  e.preventDefault();
  $('#page-loading').show();
  var newCourse = $(`<div class="Section" id="new-${currentTopic}-${count++}" style="display:none"></div>`);
  var lastCourse = $(`.Section:last`);
  lastCourse.after(newCourse);
  $(`.Section:last`).load(`../pages/new-${currentTopic}.html`);
});
$('input[type="checkbox"]').click(function () {
  if(this.checked)
    $(this).siblings('input[name="end_date"]').val('Present');
  else {
    $(this).siblings('input[name="end_date"]').val('');
  }
});
$(document.body).on('click', '.delete-section', function () {
  $(this).parent().fadeOut(1000);
  var totalHeight = $(`#${currentTopic}-form`).innerHeight();
  var lastTabHeight = $(`.Section:last`).innerHeight();
  var scrollHeight = totalHeight - lastTabHeight * 2;
  $(this).parent().remove();
  setTimeout( function () {
    $("#main-tab").animate({ scrollTop: scrollHeight * 0.98 }, 1000);
  }, 1000);
});
