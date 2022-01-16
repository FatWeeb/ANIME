// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCNqPXGHPRMYXsUl88ajLktv9uQ-6wVjSY",
      authDomain: "anime-c87de.firebaseapp.com",
      databaseURL: "https://anime-c87de-default-rtdb.firebaseio.com",
      projectId: "anime-c87de",
      storageBucket: "anime-c87de.appspot.com",
      messagingSenderId: "973067371260",
      appId: "1:973067371260:web:4af162b17e47f379714d79"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME  "+ user_name + "!!";







function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(Name)
{
      console.log(Name);
      localStorage.setItem("room_name", Name);
        window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
}

