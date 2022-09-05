//vue js on login page

let app = new Vue({
  el: "#app",

  data: {
    registerActive: false,
    emailLogin: "",
    passwordLogin: "",
    emailReg: "",
    passwordReg: "",
    confirmReg: "",
    emptyFields: false },


  methods: {
    doLogin() {
      if (this.emailLogin === "" || this.passwordLogin === "") {
        this.emptyFields = true;
      } else {
        window.location.href = "./index.html"
        alert("You are now logged in");
        
      }
    },

    doRegister() {
      if (this.emailReg === "" || this.passwordReg === "" || this.confirmReg === "") {
        this.emptyFields = true;
      } else {
        alert("Welcome, you are now Registered");
      }
    } } });