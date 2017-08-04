var skills=[];
var status=false;
var count=0;
var img_nm='';
var url='';
var skillName='';
var skillcount = 0;
var added_skill=[];
var saved_skills = newUser ["getSkill"] ();
$(document).ready(function () {
  $.getJSON("skills.json")
    .done(function (data_json) {
      skills=data_json.skills;
      status=true;
    })
    .fail(function () {
      $("#skill_list").append("<option>Not able to load suggestions</option>");
    });

  if(! $.isEmptyObject(saved_skills)){
    skillcount = saved_skills.length;
    (function recursive(i) {
      skillName = saved_skills[i]["skill"];
      added_skill.push(skillName.toLowerCase());
      var skillTab = $('#showskills');
      var newSkill = $(`<div class="skillset" id="skilldiv-${i}"></div>`);
      skillTab.append(newSkill);
      $('.skillset:last').show();
      $('.skillset:last').load('../pages/skill.html', function () {
        $('.skillset:last #skill-name').text(skillName);
        if(check_skill(skillName)){
          url = `../images/Skill Icons/${skillName}.png`;
        }
        else {
          img_nm = img_nm[0];
          url = `../images/Alphabets Icons/${img_nm}.jpeg`;
        }
        $('.skillset:last #skill-icon').css({
          'background-image' : `url('${url}')`
        });
        var newHiddenInputDiv = $(`<div id="hiddendiv-${i}"></div>`);
        var input1 = $(`<input type="hidden" id="skill-${i}" name="skill" value="${skillName}" />`);
        var input2 = $(`<input type="hidden" id="skillprof${i}" name="skillprof" value="${saved_skills[i]['skillprof']}"/>`);
        $(newHiddenInputDiv).append(input1);
        $(newHiddenInputDiv).append(input2);
        $('#Skill-form').append(newHiddenInputDiv);
        $('.skillset:last').find('#fill-prof').animate({width: `${saved_skills[i]["skillprof"]}%`},200);
        if(i < saved_skills.length -1)
          recursive(++i);
      })
    }) (0);
  }

  $("#skills").on({
    "keyup": function () {
      value=this.value.trim();
      if(status){
        if(value.length == 0)
          $(".suggestions").remove();
        else if(value.length == 1){
          count=0;
          $(".suggestions").remove();
          value = value.replace(/\+/g, "\\+");
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
          value = value.replace(/\+/g, "\\+");
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
    var newSkill = $(`<div class="skillset" id="skilldiv-${skillcount}"></div>`);
    skillTab.append(newSkill);

    var newHiddenInputDiv = $(`<div id="hiddendiv-${skillcount}"></div>`);
    var input1 = $(`<input type="hidden" id="skill-${skillcount}" name="skill" value="${skillName}" />`);
    var input2 = $(`<input type="hidden" id="skillprof${skillcount++}" name="skillprof" />`);
    $(newHiddenInputDiv).append(input1);
    $(newHiddenInputDiv).append(input2);
    $('#Skill-form').append(newHiddenInputDiv);
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
  skl = skl.replace(/\+/g, "\\+");
  var pattern= new RegExp(`^${skl}$`, 'i');
  for(var i=0; i < skills.length; i++){
    if(pattern.test(skills[i])){
      skillName = skills[i];
      return true;
    }
  }
  return false;
}
