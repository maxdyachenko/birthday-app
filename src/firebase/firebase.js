import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDZqvH4QaE0IectAXnHVZeJQ4q0EYKVSz8',
  authDomain: 'birthapp-2af38.firebaseapp.com',
  databaseURL: 'https://birthapp-2af38.firebaseio.com',
  projectId: 'birthapp-2af38',
  storageBucket: '',
  messagingSenderId: '939492774035',
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();

export const auth = firebase.auth();
