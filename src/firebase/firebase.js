import React from "react";
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  setDoc,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  serverTimestamp,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIafOMdor2BSwSVQzK3FyTM9zc_yL_yB0",
  authDomain: "e-pharmacy-dst99.firebaseapp.com",
  projectId: "e-pharmacy-dst99",
  storageBucket: "e-pharmacy-dst99.appspot.com",
  messagingSenderId: "139963413462",
  appId: "1:139963413462:web:705856164c8ce363096a77",
  measurementId: "G-4N52HCT1RD"
};
//init firebase app
const firebaseApp = initializeApp(firebaseConfig);

//init services
const db = getFirestore();
//const auth = getAuth()

export { db };

const projectStorage = getStorage(firebaseApp);

//------------------------------------functions e-pharmacy testing---------------------------------------------------

export function getUser() {
  const LOCAL_STORAGE_KEY = "userlog";
  var user = { loggedIn: false, userId: "" };
  const User_details = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  // json.parse(string) -> all string convert to an object
  if (User_details) {
    user = User_details;
    //setUser(User_details);
  } else {
    console.log("Local storage has not your loging details");
  }
  return user;
}

export function LogoutUser() {
  const LOCAL_STORAGE_KEY = "userlog";
  const auth = getAuth();
  signOut(auth)
  .then(() => {
    const user = { loggedIn: false, userId: "" }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
    window.location.href = '/';
  })
  .catch(err => {
    console.log(err.message)
  })
}

export function LoginUser(email, password, navigate, seterr) {
  const auth = getAuth();
  const LOCAL_STORAGE_KEY = "userlog";

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user_details = userCredential.user;
      const user = { loggedIn: true, userId:user_details.uid}
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
      navigate("/Customer");
      //navigate(`/Customer/${user_details.uid}`, { replace: true });
    })
    .catch((error) => {
      const firebaseError = error.message.split(/[\s,]+/);
      const authError = firebaseError[firebaseError.length - 1];
      const filteredError = authError.slice(
        authError.indexOf("/") + 1,
        authError.lastIndexOf(")")
      );
      seterr(filteredError);
    });
}

export async function signupUser(
  email,
  password,
  uName,
  uContact,
  navigate,
  seterr
) {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const userDet = userCredential.user;
      const UserID = userDet.uid;
      setUserdetails(uName, uContact, UserID);
      navigate(`/login`);
    })
    .catch((error) => {
      const firebaseError = error.message.split(/[\s,]+/);
      const authError = firebaseError[firebaseError.length - 1];
      const filteredError = authError.slice(
        authError.indexOf("/") + 1,
        authError.lastIndexOf(")")
      );
      seterr(filteredError);
    });
}

export async function setUserdetails(uName, uContact, UserID) {
  try {
    // Add a new document in collection "customers"
    await setDoc(doc(db, "customers", UserID), {
      name: uName,
      contact: uContact,
      orderCount: 0,
    });
  } catch {
    console.log("failed to add user details");
  }
}
export async function changeState(userID, orderID, newState) {
  try {
    const StrorderId = orderID.toString();
    const cusRef = doc(db, "customers/" + userID + "/orderDetails", StrorderId);
    await setDoc(cusRef, { status: newState }, { merge: true });
  } catch {
    console.log("State Change Failed!");
  }
}

export async function getOrderid(userID, setOrderid) {
  try {
    const unsub = onSnapshot(doc(db, "customers", userID), (doc) => {
      const data = doc.data();
      setOrderid(data.orderCount + 1);
    });
  } catch {
    console.log("failed to set orderID");
  }
}

export async function getStatus(Id, OrderId, setStatus) {
  try {
    const docRef = doc(db, "customers/" + Id + "/orderDetails/" + OrderId);
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data();
    setStatus(docData.status);
  } catch {
    console.log("failed to get orderID");
  }
}

export async function getAllorders(Id, setCustomers) {
  try {
    const querySnapshot = await getDocs(
      collection(db, "customers/" + Id + "/orderDetails")
    );
    const cus = [];
    querySnapshot.forEach((doc) => {
      cus.push(doc.data());
    });
    setCustomers(cus);
  } catch {
    console.log("failed to read");
  }
}

export const handleUpload = (file, Id, OrderId, navigate) => {
  let url = null;
  const storageRef = ref(projectStorage, `images/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        url = downloadURL;
        const StrorderId = OrderId.toString();
        const cusRef = doc(db, "customers/" + Id + "/orderDetails", StrorderId);
        setDoc(cusRef, { prescription: url }, { merge: true });
        navigate(`/Customer/pendingList`);
      });
    }
  );
  // return url;
};

export async function uploadPres(PresTitle, PresAddress, userID, orderID) {
  try {
    // Add a new document in collection "customers"
    const StrorderId = orderID.toString();
    await setDoc(doc(db, "customers/" + userID + "/orderDetails", StrorderId), {
      uID: userID,
      presID: StrorderId,
      createdAt: serverTimestamp(),
      title: PresTitle,
      address: PresAddress,
      status: "Processing",
      prescription: "",
      price:"",
    });
    // Add a new document in collection "customers"
    const cusRef = doc(db, "customers", userID);
    setDoc(cusRef, { orderCount: orderID }, { merge: true });
  } catch {
    console.log("failed to upload");
  }
}
