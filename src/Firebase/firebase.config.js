// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB53c43rHsPMCIoAtRN_X7DXUfOQd-5dOw",
  authDomain: "simpleloginwithemailpassword.firebaseapp.com",
  projectId: "simpleloginwithemailpassword",
  storageBucket: "simpleloginwithemailpassword.appspot.com",
  messagingSenderId: "61369303600",
  appId: "1:61369303600:web:fe86efa66a3aa83cbea3f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth