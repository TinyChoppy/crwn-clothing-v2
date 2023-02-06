import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBhTgPC5Yexu_3ywmQRgu8LFgyh2DGWZmw",

  authDomain: "crwn-clothing-56a43.firebaseapp.com",

  projectId: "crwn-clothing-56a43",

  storageBucket: "crwn-clothing-56a43.appspot.com",

  messagingSenderId: "478659369794",

  appId: "1:478659369794:web:d45922273beaa1b09306db",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

const facebookProvider = new FacebookAuthProvider();

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithFacebookPopup = () =>
  signInWithPopup(auth, facebookProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
