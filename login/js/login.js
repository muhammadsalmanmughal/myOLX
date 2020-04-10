//  Initialize Firebase
var config = {
    apiKey: "AIzaSyCnx20BIuVVXQ36pRJX8Gw8g0aXK5pxxKE",
    authDomain: "myolx-486b4.firebaseapp.com",
    databaseURL: "https://myolx-486b4.firebaseio.com",
    projectId: "myolx-486b4",
    storageBucket: "",
    messagingSenderId: "907063749358"
  };
  firebase.initializeApp(config);
  function login(){
      let mail=document.getElementById('login-mail').value;
      let pass=document.getElementById('login-pass').value;
      firebase.auth().signInWithEmailAndPassword(mail, pass)
      .then((success)=>{
        firebase.database().ref("/").child("Users/").on("child_added", (adminData)=> {
          
         localStorage.setItem("loginUser", JSON.stringify(success))
         
          swal({
            title: "Welconme",
                    text: "You can use this email to procceed further features",
                    icon: "success",
                    button: "Done",
         })
         .then(()=>{
             window.location.replace("../addproduct.html");
         })
        })
    })
    .catch(function(error) {
      // Handle Errors here.
     // var errorCode = error.code;
      var errorMessage = error.message;
      swal({
        title: "Error",
        text: errorMessage,
        icon: "error",
        button: "Ok",
    });
      // ...
    });
  }

 
  // gd();
  // function gd(){
  //   firebase.database().ref('/').child(`Users/`).on(`child_added`,(data)=>{
      
  //     let usermail=data.val().mail;
  //     document.getElementById("usermail").innerHTML=usermail;

  //     console.log(data.val().mail);        
  //   })
  // }

 
   

