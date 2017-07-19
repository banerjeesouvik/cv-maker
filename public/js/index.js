var currentPage = 0;
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
  $('#main-tab').load('./pages/0.html');
  $('.steps-element:first ').addClass('active-element');
});
