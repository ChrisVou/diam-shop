import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA4EU9TB49HYaTRK6fJ7P9P2tKBB-pQRe4",
  authDomain: "diam-db.firebaseapp.com",
  databaseURL: "https://diam-db.firebaseio.com",
  projectId: "diam-db",
  storageBucket: "diam-db.appspot.com",
  messagingSenderId: "1010633708564",
  appId: "1:1010633708564:web:00cfd6936228990cee0301",
  measurementId: "G-NKCZ8Y90RK"
};

firebase.initializeApp(config);

//Kanoume export to firebase.auth function pou kaname import stin arxi
//gia na to xrisimopoiisoume opou xreiazetai ston kwdika mas
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//Kanoume export tin firebase library se periptwsi
// pou xriastoume kati apoli tin firebase library
export default firebase;