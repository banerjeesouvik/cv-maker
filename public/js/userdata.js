class UserData{
  constructor () {
    this.basicinfo = {};
    this.address = {};
    this.photoURL = "";
    this.education = [];
    this.skills = [];
    this.projects = [];
    this.trainings = [];
    this.certifications = [];
    this.publications = [];
    this.internships = [];
    this.achievements = {};
    this.experiences = [];
    this.personaldetails = {};
    this.strengths = [];
  }
  addBasicInfo (obj) {
    this.basicinfo = obj;
    $('#preview-head').load('../pages/preview-head.html', function (){
      $('#preview #p-name').text(obj[0].name);
      $('#preview #p-email-value').text(obj[0].email);
      $('#preview #p-linkedin-value').text(obj[0].linkedin);
      $('#preview #p-github-value').text(obj[0].github);
      $('#preview #p-mobile-value').text('+91-' + obj[0].mobile);
      $('#preview #p-objective').text(obj[0].objective);
    });
    $('#preview-head').css('visibility', 'visible');
  }
  addAddress (obj) {
    this.address = obj;
    var address = obj[0].street + ', '
    + obj[0].pin + ', ' + obj[0].city + ', '
    + obj[0].dist + ', ' + obj[0].state
    + ', ' + obj[0].country;
    $('#preview #p-address-value').text(address);

  }
  addPhoto (obj) {
    this.photoURL = obj[1].locopoco;
    var url = obj[1].locopoco;
    $('#p-photo').css('background-image', `url('${url}')`);
  }
  addEducation(obj) {
    this.education = obj;
    var edu_count = obj.length;
    for(var i=0; i< edu_count; i++){
      var k = 0;
      var eduDiv = $(`<div class="p-edu-div" id="edu-div-${i}"></div>`);
      $('#p-education').append(eduDiv);
      $(`#edu-div-${i}`).load('../pages/preview-education.html', function (){
        var scoreType, score;
        console.log(obj[k]);
        if(obj[k].cgpa_score == ''){
          scoreType = 'Percentage';
          score = obj[k].percentage_score;
          obj[k].cgpa_score = "";
        }else{
          scoreType = 'CGPA';
          score = obj[k].cgpa_score;
          obj[k].percentage_score = "";
        }
        $(`#edu-div-${k} #p-score-type`).text(scoreType);
        $(`#edu-div-${k} #p-score-value`).text(score);
        $(`#edu-div-${k} .p-edu-div-degree`).text(obj[k].degree);
        $(`#edu-div-${k} .p-edu-div-year`).text(obj[k].passyear);
        $(`#edu-div-${k} #p-edu-div-inst-value`).text(obj[k].inst);
        $(`#edu-div-${k} #p-edu-div-dept`).text(obj[k].course +' ' +obj[k].dept);
        $(`#edu-div-${k} .p-edu-div-board`).text(obj[k].board);
        k++;
      });
    }
    $('#p-education').css('visibility', 'visible');
  }
  addSkill (obj) {
    this.skills = obj;
    var skill_count = obj.length;
    var k = 0;
    console.log(obj);
    for(var i=0; i<skill_count; i++){
      var skillDiv = $(`<div class="p-skill-div" id="skill-div-${i}"></div>`);
      $('#p-skills').append(skillDiv);
      $(`#skill-div-${i}`).load('../pages/preview-skills.html', function () {
        $(`#skill-div-${k} #p-skill-logo`)
        .css('background-image', `url('../images/Skill Icons/${obj[k].skill}.png')`);
        $(`#skill-div-${k} #p-skill-name`).text(obj[k].skill);
        $(`#skill-div-${k} #p-skill-prof-value`).css('width', `${obj[k].skillprof}%`);
        k++;
      });
    }

    $('#p-skills').css('visibility', 'visible');
  }
  addProject (obj) {
    this.projects = obj;
    var project_count = obj.length;
    for(var i = 0; i<project_count; i++){
      var k = 0;
      var projectDiv = $(`<div class="p-project-div" id="p-project-div-${i}"></div>`);
      $('#p-project').append(projectDiv);
      $(`#p-project-div-${i}`).load('../pages/preview-project.html', function () {
        $(`#p-project-div-${k} #project-name`).text(obj[k].project_name);
        $(`#p-project-div-${k} #project-tech`).text(obj[k].project_tech);
        $(`#p-project-div-${k} #project-desc`).text(obj[k].project_desc);
        k++;
      });
    }
    $('#p-project').css('visibility', 'visible');
  }
  addTraining (obj) {
    this.trainings = obj;
  }
  addCertification (obj) {
    this.certifications = obj;
  }
  addPublication (obj) {
    this.publications = obj;
  }
  addInternship (obj) {
    this.internships = obj;
    var intern_count = obj.length;
    for(var i = 0; i<intern_count; i++){
      var k = 0;
      var internDiv = $(`<div class="p-intern-div" id="p-intern-div-${i}"></div>`);
      $('#p-internship').append(internDiv);
      $(`#p-intern-div-${i}`).load('../pages/preview-intern.html', function () {
        $(`#p-intern-div-${k} #intern-pos`).text(obj[k].intern_role);
        $(`#p-intern-div-${k} #intern-company`).text(obj[k].organisation_name);
        $(`#p-intern-div-${k} #intern-period`).text(obj[k].start_date + ' - ' + obj[k].end_date);
        k++;
      });
    }
    $('#p-internship').css('visibility', 'visible');
  }
  addAchievement (obj) {
    this.achievements = obj;
  }
  addExperience (obj) {
    this.experiences = obj;
    var exp_count = obj.length;
    for(var i = 0; i<exp_count; i++){
      var k = 0;
      var expDiv = $(`<div class="p-exp-div" id="p-exp-div-${i}"></div>`);
      $('#p-experience').append(expDiv);
      $(`#p-exp-div-${i}`).load('../pages/preview-exp.html', function () {
        $(`#p-exp-div-${k} #exp-pos`).text(obj[k].company_designation);
        $(`#p-exp-div-${k} #exp-company`).text(obj[k].company_name);
        $(`#p-exp-div-${k} #exp-period`).text(obj[k].start_date + ' - ' + obj[k].end_date);
        k++;
      });
    }
    $('#p-experience').css('visibility', 'visible');
  }
  addPersonaldetails (obj) {
    this.personaldetails = obj;
  }
  addStrength (strength) {

  }


  getBasicInfo () {
    return this.basicinfo;
  }
  getAddress () {
    return this.address;
  }
  getPhoto () {
    return this.photoURL;
  }
  getEducation () {
    return this.education;
  }
  getSkill () {
    return this.skills;
  }
  getExperience () {
    return this.experiences;
  }
  getInternship () {
    return this.internships;
  }
  getProject () {
    return this.projects;
  }
  getTraining () {
    return this.trainings;
  }
  getCertification () {
    return this.certifications;
  }
  getPublication () {
    return this.publications;
  }
  getAchievement () {
    return this.achievements;
  }
  getPersonaldetails () {
    return this.personaldetails;
  }
}
