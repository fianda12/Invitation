import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCIM0L1bu333e7Le7cyfy3jIl5eLriJvO8",
    authDomain: "zahra-azaria.firebaseapp.com",
    projectId: "zahra-azaria",
    storageBucket: "zahra-azaria.appspot.com",
    messagingSenderId: "286013701993",
    appId: "1:286013701993:web:3b9bd81431b4facbdb07f8",
    measurementId: "G-51K9MH8YB3"
  // dan parameter lainnya sesuai dengan konfigurasi Firebase Anda
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
