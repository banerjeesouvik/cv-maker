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
      'name': obj.data_1,
      'dob': obj.data_2,
      'gender': obj.data_3,
      'email': obj.data_4,
      'mobile': obj.data_5
    };
  }
  addAddress (street, zip, city, dist, state, country) {

  }
  addPhoto (url) {

  }
  addObjective (obj) {

  }
  addEducation(degree, course, institute, univ, year, dept, score) {

  }
  addSkills (skill) {

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
