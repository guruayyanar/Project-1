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
  var ref = firebase.database().ref('winners/');
  var table = document.createElement("table");
  ref.on("child_added", function(data, prevChildKey) {
   var newPlayer = data.val();
   var tname=newPlayer.tname;
   var sname=newPlayer.sname;
   var fname=newPlayer.fname;
   var spname=newPlayer.spname;
   var name=newPlayer.name;
   var pi=document.getElementById("div1");
   var fo=document.createElement("i");
   fo.setAttribute("class","icon1");
   var fog=document.createElement("i");
   fog.setAttribute("class","icon2");
   var fok=document.createElement("i");
   fok.setAttribute("class","icon3");
   var c=document.createElement("pre");
   var a=document.createElement("br");
   var b=document.createElement("br");
   var d=document.createElement("br");
   var e=document.createElement("br");
   var x=document.createElement("b");
   var y=document.createElement("b");
   var z=document.createElement("b");
   var k=document.createElement("b");
   var l=document.createElement("b");
   c.appendChild(document.createTextNode("     Type of Sport   : "));
   x.appendChild(document.createTextNode(name));
   c.appendChild(x);
   c.appendChild(a);
   c.appendChild(document.createTextNode("     Sport Name     : "));
   y.appendChild(document.createTextNode(spname));
   c.appendChild(y);
   c.appendChild(b);
   fo.appendChild(document.createTextNode("     First Place       : "));
   c.appendChild(fo);
   k.appendChild(document.createTextNode(fname));
   c.appendChild(k)
   c.appendChild(d);
   fog.appendChild(document.createTextNode("     Second Place  : "));
   c.appendChild(fog);
   z.appendChild(document.createTextNode(sname));
   c.appendChild(z);
   c.appendChild(e);
   fok.appendChild(document.createTextNode("     Third Place      : "));
   c.appendChild(fok);   
   l.appendChild(document.createTextNode(tname));
   c.appendChild(l);
   pi.appendChild(c);
   document.body.appendChild(pi);
  });