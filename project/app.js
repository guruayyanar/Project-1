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
//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let spo=document.querySelector('#tos').value;
  let bio = document.querySelector('#bio').value;
  let job = document.querySelector('#ename').value;
  let interest = document.querySelector('#inchar').value;

  //send message values
  sendMessage(name, spo, bio, job, interest);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, spo, bio, job, interest) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    Event_name: name,
    Type_of_sport:spo,
    List_Of_Students: bio,
    Date: job,
    Incharge: interest
  });
}