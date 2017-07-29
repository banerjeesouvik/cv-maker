class UserData{
  constructor () {
    this.basicinfo = {};
    this.address = {};
    this.photoURL = "";
    this.objective = "";
    this.education = [];
    this.skills = [];
    this.projects = [];
    this.certifications = [];
    this.publications = [];
    this.internships = [];
    this.achievements = [];
    this.experiences = [];
    this.personaldetails = {};
    this.strengths = [];
  }
  addBasicInfo (obj) {
    this.basicinfo = {
      'name': obj[0].name,
      'dob': obj[0].dob,
      'gender': obj[0].gender,
      'email': obj[0].email,
      'mobile': obj[0].mobile
    };
  }
  addAddress (obj) {
    this.address = {
     'street': obj[0].street,
     'pin': obj[0].pin,
     'city': obj[0].city,
     'dist': obj[0].dist,
     'state': obj[0].state,
     'country': obj[0].country
  }
  addPhoto (obj) {
    this.photoURL = obj[1].locopoco;
  }
  addObjective (obj) {

  }
  addEducation(obj) {
    this.education = obj;
  }
  addSkill (skill) {

  }
  addProject (name, tech, desc) {

  }
  addCertification (name, auth) {

  }
  addPublication (name, auth, desc) {

  }
  addInternship (inst, period) {

  }
  addAchievement (name) {

  }
  addExperience (postname, company, period) {

  }
  addPersonaldetails () {

  }
  addStrength (strength) {

  }
}
