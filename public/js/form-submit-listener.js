$(document.body).on('submit', '.forms', function (e) {
  e.preventDefault();
  $('#page-loading').show();
    var form = $(this).attr('id');
    preProcessData(form);
    //saveData(form);

    loadNextPage();
});
