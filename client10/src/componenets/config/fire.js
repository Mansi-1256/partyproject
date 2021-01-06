import  firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD2dANkxcWrzlvXKp7TOJkfXIg0nvp31aM",
  authDomain: "rsvp-c2966.firebaseapp.com",
  databaseURL: "https://rsvp-c2966.firebaseio.com",
  projectId: "rsvp-c2966",
  storageBucket: "rsvp-c2966.appspot.com",
  messagingSenderId: "667096883892",
  appId: "1:667096883892:web:1eb9a960730529b86dede1",
  measurementId: "G-EK3B4JN7EN"
};



  const fire =   firebase.initializeApp(firebaseConfig);

  export default fire;