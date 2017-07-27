var count = 1;
$('#add-project').click(function (e) {
  e.preventDefault();
  $('#page-loading').show();
  var newProject = $(`<div class="project" id="new-project-${count++}" style="display:none"></div>`);
  var lastProject = $('.project:last');
  lastProject.after(newProject);
  $('.project:last').load('../pages/project.html');
});
$(document.body).on('click', '.delete-project', function () {
  $(this).parent().fadeOut(1000);
  var totalHeight = $('#project-form').innerHeight();
  var lastTabHeight = $('.project:last').innerHeight();
  var scrollHeight = totalHeight - lastTabHeight * 2;
  setTimeout( function () {
    $("#main-tab").animate({ scrollTop: scrollHeight * 0.98 }, 1000);
  }, 1000);
});
