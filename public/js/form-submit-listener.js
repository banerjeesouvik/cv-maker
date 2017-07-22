$('#next-button').click(function (e) {
  e.preventDefault();
  saveData();
  $('#page-loading').show();
  loadNextPage();
});
