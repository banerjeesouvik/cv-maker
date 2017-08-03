var newUser = new UserData();
var currentPage = 3;
var steps = ["basic-info", "address", "upload-photo", "education", "key-skills", "experience", "internship", "projects", "training"];
function preProcessData (form_name) {
  var count = 0;
  var data = [];
  $(`#${form_name} *`).filter('div').each(function (i, val) {
    var obj = {};
    var flag = false;
    //console.log($(this));
    $(this).children('input, select, textarea').each( function (i, value) {
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
  updatePreview();
  //console.log(newUser);
}
function updatePreview() {
  //console.log(currentPage);
  //$('#preview ')
}
function saveData(form_name, data) {
  var target = form_name.substr(0, form_name.length - 5);
  newUser['add' + target] (data);
}
function changeStep() {
  $(`#steps .steps-element:eq(${currentPage - 1})`).removeClass('active-element');
  $(`#steps .steps-element:eq(${currentPage - 1})`).css('visibility', 'visible');
  $(`#steps .steps-element:eq(${currentPage})`).addClass('active-element');
  var span = $('<span class="completed-step"></span>');
  $(`#steps .steps-element:eq(${currentPage - 1})`).append(span);
  $('.completed-step:last').fadeIn(2000);
}
function updateProgressBar() {
  var index = currentPage - 1;
  $(`.line .progressline:eq(${index})`).animate({width: '100%'},function () {
    $(`.point .progresspoint:eq(${index})`).animate({width: '100%'});
  });
}
function loadNextPage() {
  $('#main-tab').load(`./pages/${++currentPage}.html`, function() {
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

  $('#main-tab').load(`./pages/${currentPage}.html`);
  $('#progress-bar').load('./pages/progress-bar.html');
  $('#preview').load('./pages/preview.html');
});
$('#view').on('click', function(){
  $('#preview-div').slideToggle();
});

$('.steps-element').click(function () {
  var id = $(this).attr('id');
  $(`#steps .steps-element:eq(${currentPage})`).removeClass('active-element');
  $(`#steps .steps-element:eq(${currentPage})`).css('visibility', 'visible');
  currentPage = steps.indexOf(id);
  $('#main-tab').load(`./pages/${currentPage}.html`, function() {
    $('#page-loading').hide();
  });
  $(`#steps .steps-element:eq(${currentPage})`).addClass('active-element');
})
