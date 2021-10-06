const firebaseConfig = {
      apiKey: "AIzaSyAIoZULYi4-TJLJHEd1L5HlyxKT02G86L0",
      authDomain: "my-kwitter-app-ee09d.firebaseapp.com",
      databaseURL: "https://my-kwitter-app-ee09d-default-rtdb.firebaseio.com",
      projectId: "my-kwitter-app-ee09d",
      storageBucket: "my-kwitter-app-ee09d.appspot.com",
      messagingSenderId: "397436839738",
      appId: "1:397436839738:web:9f3e890d2b3720d8869203",
      measurementId: "G-7J5KJ1SYYK"
    };
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      console.log("send");
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("message").value="";
}
