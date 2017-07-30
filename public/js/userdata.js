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
    var name = obj[0].name;
    var email = obj[0].email;
    var mobile = obj[0].mobile;
    var objective = obj[0].objective;
    $('#preview #p-name').text(name);
    $('#preview #p-email-value').text(email);
    $('#preview #p-mobile-value').text('+91-' + mobile);
    $('#preview #p-objective').text(objective);

  }
  addAddress (obj) {
    this.address = obj;
    var address = obj[0].street + ' ' + obj[0].pin + ' ' + obj[0].city + ' ' + obj[0].dist + ' ' + obj[0].state
    + ' ' + obj[0].country;
    $('#preview #p-address-value').text(address);

  }
  addPhoto (obj) {
    this.photoURL = obj[1].locopoco;
    var url = obj[1].locopoco;
    $('#p-photo').css('background-image', `url('${url}')`);
  }
  addEducation(obj) {
    this.education = obj;
  }
  addSkill (obj) {
    this.skills = obj;
  }
  addProject (obj) {
    this.projects = obj;
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
  }
  addAchievement (obj) {
    this.achievements = obj;
  }
  addExperience (obj) {
    this.experiences = obj;
  }
  addPersonaldetails (obj) {
    this.personaldetails = obj;
  }
  addStrength (strength) {

  }
}
