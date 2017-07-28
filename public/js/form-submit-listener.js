$(document.body).on('submit', '.forms', function (e) {
  e.preventDefault();
    var form = $(this).attr('id');
    preProcessData(form);
    //saveData(form);
    $('#page-loading').show();
    loadNextPage();
});
