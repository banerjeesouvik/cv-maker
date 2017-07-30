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
    this.basicinfo = obj;
  }
  addAddress (obj) {
    this.address = obj;
  }
  addPhoto (obj) {
    this.photoURL = obj[1].locopoco;
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
  addPersonal_details (obj) {
    this.personaldetails = obj;
  }
  addStrength (strength) {

  }
}
