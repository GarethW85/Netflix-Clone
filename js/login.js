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

    Login() {
      if (this.passwordLogin.length <6 ) {
        alert("Password must be at least 6 characters long.");
        return false;
      } 
      else if (this.emailLogin === "") {
        alert("Email can't be blank");
        return false;
      }
      else  {
        window.location.href = "./index.html"
        alert("You are now logged in");
      }
    },

    Register() {

      let password1 = document.f1.passwordreg.value;
      let password2 = document.f1.passwordconf.value;

      let regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

      // if (password1==password2) {
      //   alert("Welcome, you are now Registered");
      //   return true;     
      // } 
      //  else if (this.passwordReg.length <6){
      //   alert("Password must be at least 6 characters long.");
      //   return false;
      // }
      // else {
      //   alert("Passwords do not match!");
      //   return false;
      // }

      if (this.passwordReg.length <6) {
        alert("Password must be at least 6 characters long.");
        return false;     
      } 
       else if (password1==password2){
        alert("Welcome, you are now Registered");
        return true
      }
      else {
        alert("Passwords do not match!");
        return false;
      }
    } 
  },
  
  mounted() {
    console.log(this.data);
  }
});
