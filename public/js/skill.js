var skills=[];
var status=false;
var count=0;
var img_nm='';
var url='';
var skillName='';
var skillcount = 1;
var added_skill=[];
$(document).ready(function () {
  $.getJSON("skills.json")
    .done(function (data_json) {
      skills=data_json.skills;
      status=true;
    })
    .fail(function () {
      $("#skill_list").append("<option>Not able to load suggestions</option>");
    });
  $("#skills").on({
    "keyup": function () {
      value=this.value.trim();
      if(status){
        if(value.length == 0)
          $(".suggestions").remove();
        else if(value.length == 1){
          count=0;
          $(".suggestions").remove();
          var pattern = new RegExp(`^${value}`,'i');
          $.each(skills, function (i, val) {
            if(pattern.test(val) && count < 5 && check_added_skills(val.toLowerCase())){
              $('#skill_list').append("<div class='suggestions'>"+val+"</div>");
              count++;
            }
          })
        }
        else if (value.length > 1) {
          count=0;
          $(".suggestions").remove();
          var pattern = new RegExp(value,'i');
          $.each(skills, function (i, val) {
            if(pattern.test(val) && count < 5 && check_added_skills(val.toLowerCase())){
              $('#skill_list').append("<div class='suggestions'>"+val+"</div>");
              count++;
            }
          })
        }
      }
    }
  });
});
$(document).on('click', '.suggestions', function () {
  skillName = $(this).text();
  url = `../images/Skill Icons/${skillName}.png`;
  $(".suggestions").remove();
  if(check_added_skills(skillName.toLowerCase())){
    added_skill.push(skillName.toLowerCase());
    var skillTab = $('#showskills');
    var newSkill = $('<div class="skillset"></div>');
    var hiddenInput = $(`<input type="hidden" name="skill${skillcount++}" value="${skillName}"/>`);

    skillTab.append(newSkill);
    skillTab.append(hiddenInput);

    $('.skillset:last').fadeIn(500);
    $('.skillset:last').load('../pages/skill.html');
  }
  $('#skills').val('').focus();
});

function check_added_skills(skl){
  if(added_skill.indexOf(skl) > -1)
    return false;
  else
    return true;
}

function check_skill(skl){
  var pattern= new RegExp(`^${skl}$`, 'i');
  for(var i=0; i < skills.length; i++){
    if(pattern.test(skills[i])){
      skillName = skills[i];
      return true;
    }
  }
  return false;
}
