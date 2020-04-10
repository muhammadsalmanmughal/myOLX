//  Initialize Firebase
var config = {
    apiKey: "AIzaSyCnx20BIuVVXQ36pRJX8Gw8g0aXK5pxxKE",
    authDomain: "myolx-486b4.firebaseapp.com",
    databaseURL: "https://myolx-486b4.firebaseio.com",
    projectId: "myolx-486b4",
    storageBucket: "myolx-486b4.appspot.com",
    messagingSenderId: "907063749358"
  };
  firebase.initializeApp(config);

//   function getdata(){
//     // var uid = firebase.auth().currentUser.uid;
//     firebase.database().ref('/').child(`Users`).on('child_added',(data)=>{
//         console.log(data.val())
//     })
// }
// console.log(getdata());
  // let userid=localStorage.getItem()
  // console.log(userid);
  
  window.addEventListener('load', async()=>{
      await checkuser()
  })

  async function checkuser(){
      let user=await localStorage.getItem('loginUser');
      let data=JSON.parse(user);
      if(data.user !== 'null'){
          // // document.getElementById('name').innerHTML=data.user.email;
          // // alert("user login")
          // swal({
          //   title: "Success",
          //   text: "user login ",
          //   icon: "success",
          //   button: "Ok",
          // });

        }
        else{
            // document.getElementById('name').style.display='none';
alert("Login Error! Please login first");

window.location = '././index.html'

      }
  }
// // image show start
//   function showImg(imageView, imageReader) {
//     var picPreview = document.querySelector(`#${imageView}`);
//     var inputFile = document.querySelector(`#${imageReader}`).files[0];
//     var reader = new FileReader();
//     reader.addEventListener("load", function () {
//         picPreview.src = reader.result;
//     }, false);
//     if (inputFile) {
//         reader.readAsDataURL(inputFile);
//     }
// }
// image show end
  
function addpost(){
  let select=document.getElementById("selector").value;
  let title=document.getElementById("txt-title").value;
  let model=document.getElementById("txt-model").value;
  let description=document.getElementById("txt-des").value;
  let price=document.getElementById("txt-price").value;
  let contact=document.getElementById("txt-contact").value;
  let location=document.getElementById("txt-location").value;
  let pic=document.getElementById("imgFile").files[0];
  let unumber=localStorage.setItem('phone',contact);
  console.log(unumber);
  

  let addpost={
    Select:select,
    Title:title,
    Model:model,
    Descrip:description,
    Contact:contact,
    Price:price,
    Location:location,
    Picture:""
  }
let useruid=firebase.auth().currentUser.uid;
firebase.storage().ref('/').child(`IMAGES/${pic.name}`).put(pic)
.then((images)=>{
  images.ref.getDownloadURL()
  .then((imageurl)=>{
    addpost.Picture=imageurl
    firebase.database().ref(`adsToPublish/`).push(addpost)
    // console.log(addpost);
    // firebase.database().ref("fav/").child(userId)
    // firebase.database().ref(`Ads/${selector}`).child(useruid).push(addpost)
    .then((success)=>{
      if(success){
       // alert("Your ad has been posted");
        Swal.fire({
         // position: 'top-end',
          type: 'success',
          title: 'Your ad has been posted',
          showConfirmButton: false,
          timer: 1500
        })
        window.location="././index.html";
      }
      else{
        console.error(); 
       alert("An Error occured! Please fill all the fields carefully");
      
    }
  
      console.log(success);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        swal({
          text: errorMessage,
          title: "Error",
          icon: "error",
          button: "Ok"
        })
        alert("data is saved in storage");
      })
    
  })
})
.catch((error)=>{
  var errorCode = error.code;
  var errorMessage = error.message;
  swal({
    title: "Connection Error",
    text: errorMessage,
    icon: "warning",
    button: "OK",
})
console.log(errorCode);

}
)}

// console.log({select,title,model,description,price,pic});
