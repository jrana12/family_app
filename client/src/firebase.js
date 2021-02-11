import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD1ALOFGpFJEB5ZoeQdqR6oDfINJtxGSLk",
    authDomain: "family-app-6921a.firebaseapp.com",
    projectId: "family-app-6921a",
    storageBucket: "family-app-6921a.appspot.com",
    messagingSenderId: "309866627614",
    appId: "1:309866627614:web:9ae6c2c657a402fd89a40f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;