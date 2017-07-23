var skillName;
var skillTab = $('#showskills');
var newSkill = $('<div class="skillset"></div>');
newSkill.load('../pages/skill.html');
$('#add-skill-form').submit( function (e) {
  e.preventDefault();
  skillName = $('#skill').val();
  $('#skill').val('');
  if( skillName.length != 0){
    skillTab.append(newSkill);
    $('.skillset:last').fadeIn();
  }
});
$(document.body).on('click', '#skill-remove', function() {
  $(this).parent().slideUp(1000);
});
