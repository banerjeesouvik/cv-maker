var currentPage = 1;
function saveData() {
}
function changeStep() {
  $(`#steps .steps-element:eq(${currentPage})`).removeClass('active-element');
  $(`#steps .steps-element:eq(${currentPage + 1})`).addClass('active-element');
}
function updateProgressBar() {
  var index = currentPage;
  $(`.line .progressline:eq(${index})`).animate({width: '100%'},function () {
    $(`.point .progresspoint:eq(${index})`).animate({width: '100%'});
  });
}
function loadNextPage() {
  $('#main-tab').load(`./pages/${++currentPage}.html`);
}
$(document).ready(function () {
  $('#progress-bar').load('./pages/progress-bar.html');
<<<<<<< HEAD
  $('#main-tab').load('./pages/basic-info.html');
=======
  $('#main-tab').load('./pages/1.html');
>>>>>>> upstream/master
  $('.steps-element:first ').addClass('active-element');

  $('#main-tab').ready(function () {
    $('#next-button').click(function (e) {
      e.preventDefault();
      $('.point:first').css('background-color', 'cornflowerblue');
      $('.line:first').css('background-color', 'cornflowerblue');
    });
  });
  
});
