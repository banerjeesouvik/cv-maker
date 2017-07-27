var count = 1;
$('#add-publication').click(function (e) {
  e.preventDefault();
  $('#page-loading').show();
  var newPublication = $(`<div class="publication" id="new-publication-${count++}" style="display:none"></div>`);
  var lastPublication = $('.publication:last');
  lastPublication.after(newPublication);
  $('.publication:last').load('../pages/publication.html');
});
$(document.body).on('click', '.delete-publication', function () {
  $(this).parent().fadeOut(1000);
  var totalHeight = $('#publication-form').innerHeight();
  var lastTabHeight = $('.publication:last').innerHeight();
  var scrollHeight = totalHeight - lastTabHeight * 2;
  setTimeout( function () {
    $("#main-tab").animate({ scrollTop: scrollHeight * 0.98 }, 1000);
  }, 1000);
});
