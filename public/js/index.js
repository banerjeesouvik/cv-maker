var currentPage = 0;
function saveData() {
}
function changeStep() {
  $(`#steps .steps-element:eq(${currentPage})`).removeClass('active-element');
  $(`#steps .steps-element:eq(${currentPage})`).css('visibility', 'visible');
  $(`#steps .steps-element:eq(${currentPage + 1})`).addClass('active-element');
  var span = $('<span class="completed-step"></span>');
  $(`#steps .steps-element:eq(${currentPage})`).append(span);
  $('.completed-step:last').fadeIn(2000);
}
function updateProgressBar() {
  var index = currentPage++;
  $(`.line .progressline:eq(${index})`).animate({width: '100%'},function () {
    $(`.point .progresspoint:eq(${index})`).animate({width: '100%'});
  });
}
function loadNextPage() {
  $('#main-tab').load(`./pages/${currentPage + 1}.html`, function() {
    $('#page-loading').hide();
    changeStep();
    updateProgressBar();
  });
}
$(document).ready(function () {
  $('#progress-bar').load('./pages/progress-bar.html');
  $('#main-tab').load('./pages/2.html');
  $('.steps-element:first ').addClass('active-element');
});
