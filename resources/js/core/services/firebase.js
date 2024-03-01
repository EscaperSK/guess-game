import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = initializeApp({
    apiKey: "AIzaSyB5J__9dfn8_TxZ5h88U43O7vbcB_OwsfU",
    authDomain: "gues-dfebe.firebaseapp.com",
    projectId: "gues-dfebe",
    storageBucket: "gues-dfebe.appspot.com",
    messagingSenderId: "993253874904",
    appId: "1:993253874904:web:6d40d3b1ab5ca8a0070bad"
});

const db = getFirestore(app);

export { db };
