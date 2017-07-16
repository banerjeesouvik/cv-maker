
$(document).ready(function () {
  $('#progress-bar').load('./pages/progress-bar.html');
  $('#main-tab').load('./pages/basic-info.html');
  $('.steps-element:first ').addClass('active-element');
  $('#main-tab').ready(function (){
    $('#next-button').click(function (e) {
      e.preventDefault();
      saveData();
      loadNextPage();
      $('.point:first').css('background-color', 'cornflowerblue');
      $('.line:first').css('background-color', 'cornflowerblue');
    });
  });

});

function saveData() {
}
function loadNextPage() {
  $('#main-tab').html("<h2>Next page should appear</h2>");
}
