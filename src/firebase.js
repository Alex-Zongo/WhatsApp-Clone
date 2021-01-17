import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCRibiwXrmAhT4tDlM98LKIO51QREdAmE",
  authDomain: "whatsapp-clone-e3f5e.firebaseapp.com",
  projectId: "whatsapp-clone-e3f5e",
  storageBucket: "whatsapp-clone-e3f5e.appspot.com",
  messagingSenderId: "746006515742",
  appId: "1:746006515742:web:38066cc8659597442c9e0f",
  measurementId: "G-M11Q70MEQZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
