
$(document).ready(function () {
  $('#progress-bar').load('./pages/progress-bar.html');
  $('#main-tab').load('./pages/basic-info.html');
  $('.steps-element:first ').addClass('active-element');

  $('#main-tab').ready(function () {
    $('#next-button').click(progressCompletion);
  });
});


function progressCompletion(e) {
  e.preventDefault();
  $('.point:first').css('background-color', 'cornflowerblue');
  $('.line:first').css('background-color', 'cornflowerblue');
}
