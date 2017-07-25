
$(document.body).on('click', '.vert-bar', function (e) {
  var barWidth = $(this).innerWidth();
  var barLeft = $(this).offset().left;
  var clickX = e.pageX;
  var clickWidth = clickX - barLeft;
  //console.log(barWidth, barLeft, clickX);
  var percent = clickWidth / barWidth * 100;
  $(this).find('#fill-prof').animate({width: `${percent}%`},200);
});
