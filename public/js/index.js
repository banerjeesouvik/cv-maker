var newUser = new UserData();
var currentPage = 0;
function preProcessData (form_name) {
  var count = 0;
  $(`#${form_name} *`).filter('div').each(function (i, val) {
    var obj = {};
    console.log($(`.${$(val).attr('class')} input`).val());
    $(`#${$(this).attr('id')} *`).filter(':input').each(function (j, value) {
      console.log($(value).val());
    });
    //console.log(obj);
  });
}
function saveData(form_name) {
  var target = form_name.substr(0, form_name.length - 5);
  var dataObject = {};

  newUser['add' + target] ({});
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
  //use these when using any other page than 0.html as first page
  $('.steps-element:first ').addClass('active-element');
  $('#container').css('visibility', 'visible');
  $('#page-loading').hide();

  $('#main-tab').load('./pages/0.html');
  $('#progress-bar').load('./pages/progress-bar.html');
});
