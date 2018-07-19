import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyALN-U6BpN3bIzqnv0z_lACf94KbB93g1Q',
  authDomain: 'fitm-app.firebaseapp.com',
  databaseURL: 'https://fitm-app.firebaseio.com',
  projectId: 'fitm-app',
  storageBucket: 'fitm-app.appspot.com',
  messagingSenderId: '70705103923'
}
firebase.initializeApp(config)

export const db = firebase.database()
export const subjectRef = db.ref('Subjects')