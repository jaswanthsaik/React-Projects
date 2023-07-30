import firebase from 'firebase';
// import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAByvseql50IATdY-kUIroQGe2ERDwhDmE",
    authDomain: "login-a1979.firebaseapp.com",
    databaseURL: "https://login-a1979-default-rtdb.firebaseio.com",
    projectId: "login-a1979",
    storageBucket: "login-a1979.appspot.com",
    messagingSenderId: "157504798493",
    appId: "1:157504798493:web:8c865d4d4586a7d474abf4"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;