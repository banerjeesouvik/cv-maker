class UserData{
  constructor () {
    this.basicinfo = {};
    this.address = {};
    this.photoURL = "";
    this.objective = "";
    this.education = [];
    this.skills = [];
    this.projects = [];
    this.trainings = [];
    this.certifications = [];
    this.publications = [];
    this.internships = [];
    this.achievements = "";
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
    };
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
  addPersonal_details (obj) {
    this.personaldetails = obj;
  }
  addStrength (strength) {

  }
}
