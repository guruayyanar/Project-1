// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB6dgj-zROeT005HS_GH3MHmyOR-Vja-0s",
    authDomain: "airline-reservation-syst-d8a49.firebaseapp.com",
    databaseURL: "https://airline-reservation-syst-d8a49.firebaseio.com",
    projectId: "airline-reservation-syst-d8a49",
    storageBucket: "airline-reservation-syst-d8a49.appspot.com",
    messagingSenderId: "314095361597",
    appId: "1:314095361597:web:bbd6d183bd4fb175ae9454",
    measurementId: "G-B6LHLP9EDX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var ref = firebase.database().ref('register/');
  var table = document.createElement("table");
  ref.on("child_added", function(data, prevChildKey) {
   var newPlayer = data.val();
   var tr = document.createElement("tr");
   /*console.log("Previous: " + newPlayer.Incharge);
   console.log("Previous Player: " + newPlayer.Event_Name);
   console.log("number: " + newPlayer.List_Of_Students);
   console.log("age: " + newPlayer.email);*/
   var inchar=newPlayer.Incharge;
   var ename=newPlayer.Date;
   var stud=newPlayer.List_Of_Students;
   var spor=newPlayer.Type_of_sport;
   var name=newPlayer.Event_name;
   var pi=document.getElementById("div1");
   var c=document.createElement("p");
   var li=document.createElement("center");
   var b=document.createElement("br");
   var e=document.createElement("b");
   var f=document.createElement("b");
   var g=document.createElement("br");
   var h=document.createElement("br");
   var z=document.createElement("b");
   var y=document.createElement("b");
   c.appendChild(document.createTextNode("Event Name  : "));
   e.appendChild(document.createTextNode(name));
   c.appendChild(e);
   c.appendChild(b);
   c.appendChild(document.createTextNode("Type of Sport : "));
   f.appendChild(document.createTextNode(spor));
   c.appendChild(f);
   c.appendChild(h);
   li.appendChild(document.createTextNode(stud));
   c.appendChild(document.createTextNode("List of Students : "));
   c.appendChild(li);
   c.appendChild(document.createTextNode("Time Limit : "));
   z.appendChild(document.createTextNode(ename));
   c.appendChild(z);
   c.appendChild(g);
   c.appendChild(document.createTextNode("Incharge   : "));
   y.appendChild(document.createTextNode(inchar));
   c.appendChild(y);
   pi.appendChild(c);
   document.body.appendChild(pi);
   //b.appendChild(c);
   //document.write(a);
  });

