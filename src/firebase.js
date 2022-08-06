// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,doc,getDoc,setDoc,updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgpQ7rraEWqTZ8hkSN1SFwW-XotLQVuHo",
  authDomain: "hair-app-be539.firebaseapp.com",
  projectId: "hair-app-be539",
  storageBucket: "hair-app-be539.appspot.com",
  messagingSenderId: "753919093946",
  appId: "1:753919093946:web:9452fbb8edb783ba902683",
  measurementId: "G-GGT5976K58"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addUser = async (id,nickname,img) => {
  const docSnap = await getDoc(doc(db, "users", String(id)));
  if (!docSnap.exists()) {
      const data = {
          nickname : nickname,
          img : img,
          face_shape:'',
      }
      await setDoc(doc(db, "users", String(id)), data).catch(err => console.log(err))
  }
}

export const getUser = async (id) => {
  const docRef = doc(db, "users", String(id))
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export const shapeUpdate = async (id,shape) => {
  const docSnap = await getDoc(doc(db, "users", String(id)));
  if (docSnap.exists()) {
      const data = {
        face_shape : shape
      }
      await updateDoc(doc(db, "users", String(id)), data).catch(err => console.log(err))
  }
}
