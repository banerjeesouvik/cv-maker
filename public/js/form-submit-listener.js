$(document.body).on('submit', '.forms', function (e) {
  e.preventDefault();
    saveData();
    $('#page-loading').show();
    loadNextPage();
});
