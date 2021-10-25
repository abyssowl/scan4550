//javascript file for login


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



function login(){
    //obtain input fields
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

     //checks valid email and if password longer than 6 characters
     if(validEmail(email) == false || validPassword(password) == false){
        alert('Invalid Email or Password');
        return
    }


    //Authorize User sign in
    auth.signInWithEmailAndPassword(email,password).then(function(){
        var user = auth.currentUser;

        //Add user to firebase database
        var databaseRef = database.ref();

        //creating user data
        var userData = {
            lastLogin:Date.now()
        }

        databaseRef.child('users/' + user.uid).update(userData);
        alert('User has been logged in');

    })
    .catch(function(error){
        //alert of errors
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    })
}





//validating if email input is actually an email
function validEmail(Email){
    check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(check.test(email) == true){
        //email passes
        return true;
    } else {
        //email fails
        return false;
    }
}

//only accepting a valid password
function validPassword(password){
    //must be more than 6 characters
    if(password < 6){
        return false
    }else{
        return true
    }
}