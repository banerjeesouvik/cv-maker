$('.forms').submit(function (e) {
  e.preventDefault();
    saveData();
    $('#page-loading').show();
    loadNextPage();
});
