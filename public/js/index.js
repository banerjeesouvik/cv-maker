var newUser = new UserData();
var currentPage = 0;

function preProcessData (form_name) {
  var count = 0;
  var data = [];
  $(`#${form_name} *`).filter('div').each(function (i, val) {
    var obj = {};
    var flag = false;
    $(this).children('input, select').each( function (i, value) {
      var name = $(this).attr('name');
      var inputValue = $(this).val();
      obj[name] = inputValue;
      flag = true;
    });
    if( flag == true){
      data.push(obj);
    }

  });
  saveData(form_name, data);
  console.log(newUser);
}
function saveData(form_name, data) {
  var target = form_name.substr(0, form_name.length - 5);
  newUser['add' + target] (data);
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

  $('#main-tab').load('./pages/4.html');
  $('#progress-bar').load('./pages/progress-bar.html');
});
