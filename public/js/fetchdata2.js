var courses = newUser["getEducation"] ();
$(document).ready(function () {
  if(! $.isEmptyObject(courses)){
    //console.log('in');
    var k = 3;
    for(var i=0; i < courses.length;i++){
      if(i<3){
        $(`#Education-form > div:eq(${i}) > input`).each(function () {
          $(this).val(courses[i][$(this).attr('name')]);
          //console.log(courses[i][$(this).attr('name')]);
        });
      }
      else{
        var newCourse = $(`<div class="Section" id="new-Education-${i-2}" style="display:none"></div>`);
        var lastCourse = $(`.Section:last`);
        lastCourse.after(newCourse);
        $('.Section:last').show();
        $(`.Section:last`).load('../pages/new-Education.html', function () {
          $(`#Education-form > div:eq(${k}) > input`).each(function () {
            $(this).val(courses[k][$(this).attr('name')]);
          });
          k++;
        });
      }
    }
  }
});
