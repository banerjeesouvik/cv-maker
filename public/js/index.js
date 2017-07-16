$('#progress-bar').load('./pages/progress-bar.html');
$('#main-tab').load('./pages/0.html');
$('.steps-element:first ').addClass('active-element');
var currentPage = 0;
$(document).ready(function () {
  $('.forms').submit(function (e){
    e.preventDefault();
    //saveData();
    changeStep();
    updateProgressBar();
    loadNextPage();
  });
});
function saveData() {
}
function changeStep() {
  $(`#steps .steps-element:eq(${currentPage})`).removeClass('active-element');
  $(`#steps .steps-element:eq(${currentPage + 1})`).addClass('active-element');
}
function updateProgressBar() {
  $(`#progress-bar-div .line:eq(${currentPage})`).css('background-color', 'cornflowerblue');
  $(`#progress-bar-div .point:eq(${currentPage + 1})`).css('background-color', 'cornflowerblue');
}
function loadNextPage() {
  return $('#main-tab').load(`./pages/${++currentPage}.html`);
}
