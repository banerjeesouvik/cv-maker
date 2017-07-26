var skillName;
$('#add-skill-form').submit( function (e) {
  e.preventDefault();
  $('#page-loading').show();
  skillName = $('#skills').val();
  var skillTab = $('#showskills');
  var newSkill = $('<div class="skillset" style="display: none"></div>');
  $('#skills').val('');
  if( skillName.length != 0){
    skillTab.append(newSkill);
    $('.skillset:last').load('../pages/skill.html');
  }
});
$(document.body).on('click', '#skill-remove', function() {
  $(this).parent().slideUp(500);
});
