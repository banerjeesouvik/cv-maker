var skillName;
$('#add-skill-form').submit( function (e) {
  e.preventDefault();
  skillName = $('#skill').val();
  $('#skill').val('');
  if( skillName.length != 0){
    var skillTab = $('#showskills');
    var newSkill = $('<div class="skillset"></div>');
    newSkill.load('../pages/skill.html');
    skillTab.append(newSkill);
    $('.skillset:last').slideDown(800);
    
  }
});
