
$(document.body).on('click', '.vert-bar', function (e) {
  var barWidth = $('.vert-bar:first').innerWidth();
  var barLeft = $('.vert-bar:first').offset().left;
  var clickX = e.pageX;
  var clickWidth = clickX - barLeft;
  console.log(barWidth, barLeft, clickX);
  var percent = clickWidth / barWidth * 100;
  $(this).find('#fill-prof').animate({width: `${percent}%`},200);
});
