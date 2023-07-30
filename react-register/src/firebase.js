import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrepTyVWzQ5Pd08hsgiztXAcmqStdMBRI",
  authDomain: "loginpage-be63f.firebaseapp.com",
  projectId: "loginpage-be63f",
  storageBucket: "loginpage-be63f.appspot.com",
  messagingSenderId: "1013902378767",
  appId: "1:1013902378767:web:65e217f553b2b4e8fe607a"
};



// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const facebookAuthProvider = new firebaseConfig.auth.FacebookAuthProvider();
// const googleAuthProvider = new firebaseConfig.auth.GoogleAuthProvider();

export { auth };
export { firebaseConfig };
export {db} ;
// export {facebookAuthProvider};
// export {googleAuthProvider};
export default app;
