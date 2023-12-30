// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArr6S1cERcIIlStb2ZOfDM7bKHrsnYDlg",
  authDomain: "student-council-1.firebaseapp.com",
  projectId: "student-council-1",
  storageBucket: "student-council-1.appspot.com",
  messagingSenderId: "75917841809",
  appId: "1:75917841809:web:361a8e2bd226d91013f630",
};

// Initialize Firebase
export  const firebase = initializeApp(firebaseConfig);

export const database = getAuth(firebase)
// export default firebase;
