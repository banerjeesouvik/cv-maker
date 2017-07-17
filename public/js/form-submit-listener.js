$('.forms').submit(function (e) {
  e.preventDefault();
  saveData();
  changeStep();
  updateProgressBar();
  loadNextPage();
});
