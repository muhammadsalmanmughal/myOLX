let users= localStorage.getItem('loginUser');
let data=JSON.parse(users);
console.log("LS DATA:",data.user.email);
let mail=document.getElementById("showid").innerHTML=data.user.email;

let call = localStorage.getItem('phone');
let calls=JSON.parse(call);
console.log("phone number ",calls);


let uphone=document.getElementById("showphone").innerHTML=calls;


