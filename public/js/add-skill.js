var skillName;
$('#add-skill-form').submit( function (e) {
  e.preventDefault();
  skillName = $('#skill').val();
  var skillTab = $('#showskills');
  var newSkill = $('<div class="skillset"></div>');
  $('#skill').val('');
  if( skillName.length != 0){
    skillTab.append(newSkill);
    $('.skillset:last').fadeIn(500);
    $('.skillset:last').load('../pages/skill.html');
  }
});
$(document.body).on('click', '#skill-remove', function() {
  $(this).parent().slideUp(500);
});
