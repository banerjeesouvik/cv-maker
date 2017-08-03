var fetched_data = newUser[`get${currentTopic}`] ();
$(document).ready(function () {
  if(! $.isEmptyObject(fetched_data)){
    //console.log('in');
    var k, static_divs;
    if(currentPage == 3)
      k = 3, static_divs = 3;
    else
      k = 1, static_divs = 1;
    for(var i=0; i < fetched_data.length;i++){
      if(i < static_divs){
        $(`#${currentTopic}-form > div:eq(${i}) > input,textarea`).each(function () {
          $(this).val(fetched_data[i][$(this).attr('name')]);
          //console.log(fetched_data[i][$(this).attr('name')]);
        });
      }
      else{
        var newCourse = $(`<div class="Section" id="new-${currentTopic}-${i-2}" style="display:none"></div>`);
        var lastCourse = $(`.Section:last`);
        lastCourse.after(newCourse);
        $('.Section:last').show();
        $(`.Section:last`).load(`../pages/new-${currentTopic}.html`, function () {
          $(`#${currentTopic}-form > div:eq(${k}) > input,textarea`).each(function () {
            $(this).val(fetched_data[k][$(this).attr('name')]);
          });
          k++;
        });
      }
    }
  }
});
