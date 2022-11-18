import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDRfSDuwyfMigRCvkgBo_6Icp7GJXJceUw",
    authDomain: "disney-hotstar-clone-web-app.firebaseapp.com",
    projectId: "disney-hotstar-clone-web-app",
    storageBucket: "disney-hotstar-clone-web-app.appspot.com",
    messagingSenderId: "1043770112973",
    appId: "1:1043770112973:web:35205291a866ab7ed5a284",
    measurementId: "G-E6TM46FSES"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseConfig);

export { auth, provider, storage, db };
export default firebase;
