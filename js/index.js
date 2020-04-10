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


  window.addEventListener("load",async()=>{
    await datarender()
  })


  function showToast(text){
    var x=document.getElementById("toast");
    x.classList.add("show");
    x.innerHTML=text;
    setTimeout(function(){
      x.classList.remove("show");
    },3000);
  }

//change page to index
function formlogin(){
  window.location="login/index.html";
}
//change page to add product page
function gotopro(){
  window.location="./addproduct.html";
}
function APP(){
     window.location="./addproduct.html";
}
function addtofav(){
  window.location="./addtofav.html";
}
function profile(){
  window.location="./profile.html";
}
document.getElementById("ddown").style.display="none";
  
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // console.log(user.email);
    document.getElementById("umail").innerHTML=user.email;
  }
})
window.addEventListener('load', async()=>{
    await checkuser()
})


async function checkuser(){
    let users=await localStorage.getItem('loginUser');
    let data=JSON.parse(users);
    if(data.user !== 'null'){
        // document.getElementById('name').innerHTML=data.user.email;
        // alert("user login")
        // swal({
        //   title: "Success",
        //   text: "user login ",
        //   icon: "success",
        //   button: "Ok",
        // });
        document.getElementById("user-login").style.display="none";
        document.getElementById("ddown").style.display="block";
      }
      else{
          // document.getElementById('name').style.display='none';
// alert("user logout");

// window.location = '././index.html'

    }
}
function logout() {
  firebase.auth().signOut()
    .then(() => {
      localStorage.setItem("loginUser", JSON.stringify({ user: 'null' }))
      // localStorage.clear();
      // localStorage.removeItem("loginUser");
      alert("user logout successfully");
      window.location = '././index.html'
    }).catch((error) => {
      let errorMessage = error.message;
      swal({
        title: "Error",
        text: errorMessage,
        icon: "error",
        button: "Ok",
      });
    });
}
// datarender();
function datarender(){
firebase.database().ref(`adsToPublish/`).once("value",(data)=>{
  var data=data.val();
console.log(data);

for(var i in data) {
  console.log("i*****",i)
  console.log(data[i].Title)
  document.querySelector("#indexRowPoster").innerHTML +=
      `<div class="col-sm-4">
      <h1 id="mobile">${data[i].Select}</h1>
        <div style="width:250px; height:350px; margin: 30px; border:1.5px solid #d9d9d9;" class="card text-center">
          <div class="placeBox" style="margin-top:10px">
            <img style="height:150px" width="200px;" src="${data[i].Picture}" class="img-fluid">
          </div>
          <div class="container text-left">
            <h6 style="font-weight:800; border-bottom:1px solid #dcdcdc" class="text-middle" > RS ${data[i].Price}</h6>
            <p style="font-size:12px;font-weight:700;"> ${"Product: "+data[i].Title}</p>
            <span style="font-size:10px;font-weight:700; float: left;" class="span-right">${"Model: "+data[i].Model}</span><br>
          </div>
         
          <div class="container text-bottom">
          
            
            <span style="font-size:10px;font-weight:700; float: left;" class="span-right">${"Contact: "+data[i].Contact}</span><br>
            <span style="font-size:10px;font-weight:700; float: left;" class="span-right">${"Location: "+data[i].Location}</span><br>
            <span style="border-bottom: 1px solid gray"></span>
            <span style="font-size:12px; font-weight:700; float: left;" class="span-right">${"Description: "+data[i].Descrip}</span><br>
  
          </div>
         
        </div>
        </div>
      </div>`
}

{/* <div class="btn-group container" role="group" aria-label="Basic example">
<button type="button" style="font-size:10px;" >Add to Favorite</button>
<button type="button"  style="font-size:10px;">Middle</button> */}




// var categories = data.select;
// var upperCase = categories.toUp;
// console.log(upperCase)


})
}

function search() {
  var div = document.getElementById("indexRowPoster");

  div.innerHTML = ""
  var input = document.getElementById("txtSearch").value;


  firebase.database().ref("adsToPublish/").once("value",(data)=>{
    var data = data.val()

    for(var i in data) {
      console.log(data[i].Select)
      if(input === data[i].Select || input === data[i].Title) {
        div.innerHTML +=
        `<div class="col-sm-4">
        <h1 id="mobile">${data[i].Select}</h1>
          <div style="width:250px; height:350px; margin: 30px; border:1.5px solid #d9d9d9;" class="card text-center">
            <div class="placeBox" style="margin-top:10px">
              <img style="height:150px" width="200px;" src="${data[i].Picture}" class="img-fluid">
            </div>
            <div class="container text-left">
              <h6 style="font-weight:800; border-bottom:1px solid #dcdcdc" class="text-middle" > RS ${data[i].Price}</h6>
              <p style="font-size:12px;font-weight:700;"> ${"Product: "+data[i].Title}</p>
              <span style="font-size:10px;font-weight:700; float: left;" class="span-right">${"Model: "+data[i].Model}</span><br>
            </div>
           
            <div class="container text-bottom">
            
              
              <span style="font-size:10px;font-weight:700; float: left;" class="span-right">${"Contact: "+data[i].Contact}</span><br>
              <span style="font-size:10px;font-weight:700; float: left;" class="span-right">${"Location: "+data[i].Location}</span><br>
              <span style="border-bottom: 1px solid gray"></span>
              <span style="font-size:12px; font-weight:700; float: left;" class="span-right">${"Description: "+data[i].Descrip}</span><br>
    
            </div>
            <div class="btn-group container" role="group" aria-label="Basic example">
            <button type="button" style="font-size:10px;" >Add to Favorite</button>
            <button type="button"  style="font-size:10px;">Middle</button>
          </div>
          </div>
        </div>` 
      }
      // else if(input !== data[i].Select){
      //   div.innerHTML =  `
      //   <h1>not found ${input}</h1>
      //   `
      // }
    }

  })



}


// function getdata1(){
//   let userid = localStorage.getItem('loginUser');
//   let data=JSON.parse(userid);
//   console.log(data.user.email);
//   document.getElementById('umail').innerHTML=data.user.email;

// }
// getdata1();
  

// getdata2();
// function getdata2(){
//   firebase.database().ref("/").child(`Users/`).on(`child_added`,(data)=>{
//     console.log(data.val());
//     // document.getElementById('dbemail').innerHTML=data.val().mail;
//   })
// }




//firebase se current user ki email 
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     console.log(user.email);
     
//   } else {
//    console.log("nothing");
   
//   }
// });
  