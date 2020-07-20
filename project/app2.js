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
//Reference for form collection(3)
let formMessage = firebase.database().ref('winners');

document
  .getElementById('winnerlist')
  .addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();
    let spname = document.querySelector('#spname').value;
    let name = document.querySelector('#tos').value;
    let fname = document.querySelector('#fname').value;
    let sname = document.querySelector('#sname').value;
    let tname = document.querySelector('#tname').value;
    //send message values
    sendMessage(spname, name, fname, sname, tname);
  
    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';
  
    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);

    document.getElementById('winnerlist').reset();
}

function sendMessage(spname, name, fname, sname, tname) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      spname: spname,  
      name: name,
      fname: fname,
      sname: sname,
      tname: tname
    });
  }