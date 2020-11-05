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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;