var skills=[];
var status=false;
var count=0;
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
      $(this).val(value);
      if(status){
        if(value.length == 1){
          count=0;
          $(".suggestions").remove();
          var pattern = new RegExp('^'+value,'gi');
          $.each(skills, function (i, val) {
            if(pattern.test(val) && count < 5){
              $('#skill_list').append("<div class='suggestions'>"+val+"</div>");
              count++;
            }
          })
        }
        else if (value.length > 1) {
          count=0;
          $(".suggestions").remove();
          var pattern = new RegExp(value,'gi');
          $.each(skills, function (i, val) {
            if(pattern.test(val) && count < 5){
              $('#skill_list').append("<div class='suggestions'>"+val+"</div>");
              count++;
            }
          })
        }
      }
    },
    "focusout": function () {
      $(".suggestions").remove();
    }
  });
});