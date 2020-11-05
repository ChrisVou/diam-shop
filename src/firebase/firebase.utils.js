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

/* .Watch video 7.12 Storing User Data In Firebase
  .Ama to userAuth den object den iparxei leme na return diladi na vgei eksw apo afti tin fuction
  To userAuth einai o user otan kanei signin me to Google Account tou 
  .Apothikevoume mesa stin database (firebase) ta data dimiourgisame tou user 
  sto displayName: "Xristos Xristou"
  sto email: "chrisvou@hotmail.com"
  sto createdAt: June 24, 2020 at 10:47:38 PM UTC+3 */
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

/* Kanoume export to firebase.auth function pou kaname import stin arxi
gia na to xrisimopoiisoume opou xreiazetai ston kwdika mas */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

/* Kanoume export tin firebase library se periptwsi
pou xriastoume kati apoli tin firebase library */
export default firebase;