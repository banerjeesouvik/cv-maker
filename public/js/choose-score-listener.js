$('div #cgpa').addClass('score-active');
$('span').click(function () {
  alert('clicked');
});
$('span .span-score').click( function () {
  var id = this.id;
  var parent = $(this).closest('div').attr('id');
  $(`#${parent} .span-score`).removeClass('score-active');
  $(`#${parent} #${id}`).addClass('score-active');
  $(`#${parent} .score-input`).hide();
  $(`#${parent} #${id}-score`).show();
});
