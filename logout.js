//logout
// our specific firebase details NEEDED FOR FIREBASE DONT DELETE
var firebaseConfig = {
    apiKey: "AIzaSyDmPcQArOLLcis9MPFbiVOdqZsicY31Cao",
    authDomain: "medical-imaging-database.firebaseapp.com",
    projectId: "medical-imaging-database",
    storageBucket: "medical-imaging-database.appspot.com",
    messagingSenderId: "949166495113",
    appId: "1:949166495113:web:82e3260754838eb9edbd58",
    measurementId: "G-6PYG9WVTB0"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()


const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    location.href = 'login.html';
    console.log('user logged out');
  });
});
