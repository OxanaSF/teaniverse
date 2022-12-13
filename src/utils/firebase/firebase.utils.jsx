

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  // initializeAuth
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  addDoc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

import { v4 as uuid } from 'uuid';


// import { setCurrentOrder } from '../../store/order/order.action';

const firebaseConfig = {
  apiKey: 'AIzaSyBuRJHCHSH-6sJo3klHujYH3_7dLVSTNU0',
  authDomain: 'teaniverse2022.firebaseapp.com',
  projectId: 'teaniverse2022',
  storageBucket: 'teaniverse2022.appspot.com',
  messagingSenderId: '154521981511',
  appId: '1:154521981511:web:45ad5351f45ce7c3fa5762',
};

// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};

export const getOrders = async () => {
  const ordersRef = collection(db, 'orders');
  const q = query(ordersRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

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
      console.log('error creating the user', error.message);
    }

  }

  return userDocRef;
};

export const createOrder = async (items, uuid, user) => {
  const date=new Date()
  // const receipt=uuid()
  try {
    await addDoc(collection(db, 'orders'), {
      orders: items,
      receipt: uuid,
      date: date,
      user: user
    });
    console.log('RAN WELL')
    // return receipt
    
  } catch (error) {
    console.log('error creating the order', error.message);
  }
  
};



export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const checkoutButton = document.getElementById('checkout-button');
