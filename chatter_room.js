// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDOUIuwVz5ZLH6GRRqQKsnicsZcZzOyhxA",
  authDomain: "project-93-ba969.firebaseapp.com",
  databaseURL: "https://project-93-ba969-default-rtdb.firebaseio.com",
  projectId: "project-93-ba969",
  storageBucket: "project-93-ba969.appspot.com",
  messagingSenderId: "322958567838",
  appId: "1:322958567838:web:ef6a911b20e7351fff4e8f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom() {

  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room_name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="chatter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("room_name"+Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
  //End code
  });});}
getData();

function redirectToRoomName(name) {

  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="chatter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function redirectToRoomName(name) {

  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="chatter_page.html";
}