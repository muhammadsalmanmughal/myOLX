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

  function signup(){
    var name=document.getElementById('signup-name').value;
    var mail=document.getElementById('signup-mail').value;
    var pass=document.getElementById('signup-pass').value;
    firebase.auth().createUserWithEmailAndPassword(mail,pass)
    .then(()=>{
        let userObj={
            name,
            mail
        }
               
        let userId= firebase.auth().currentUser.uid;
        firebase.database().ref('Users/'+userId).set(userObj)
                  
        .then((success)=>{
           swal({
              title: "Welconme",
                      text: "You can use this email to procceed further features",
                      icon: "success",
                      button: "Done",
           })   
           .then(()=>{
               //ye textbox ko empty kerne k liye likha he
               document.getElementById('signup-name').value="";
               document.getElementById('signup-mail').value="";
               document.getElementById('signup-pass').value="";
            
               window.location.href='../login/index.html';
           })
        })
    })
    .catch(function (error) {0.

      // Handle Errors here.
     // document.getElementById("loaders").style.display = 'none';
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
  