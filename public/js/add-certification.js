var count = 1;
$('#add-certification').click(function (e) {
  e.preventDefault();
  $('#page-loading').show();
  var newCertification = $(`<div class="certification" id="new-certification-${count++}" style="display:none"></div>`);
  var lastCertification = $('.certification:last');
  lastCertification.after(newCertification);
  $('.certification:last').load('../pages/certification.html');
});
$(document.body).on('click', '.delete-certification', function () {
  $(this).parent().fadeOut(1000);
  var totalHeight = $('#certification-form').innerHeight();
  var lastTabHeight = $('.certification:last').innerHeight();
  var scrollHeight = totalHeight - lastTabHeight * 2;
  setTimeout( function () {
    $("#main-tab").animate({ scrollTop: scrollHeight * 0.98 }, 1000);
  }, 1000);
});
