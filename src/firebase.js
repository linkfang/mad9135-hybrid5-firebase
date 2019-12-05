import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBhpT7yiUMoh5VGl1rKKBljwYwlXEDkWLI",
  authDomain: "movies-a919d.firebaseapp.com",
  databaseURL: "https://movies-a919d.firebaseio.com",
  projectId: "movies-a919d",
  storageBucket: "",
  messagingSenderId: "969700840451",
  appId: "1:969700840451:web:4d72dbb077e97738f8ea36",
  measurementId: "G-F9N29JZC75"
});

const db = firebaseApp.firestore();

export {db};
