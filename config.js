import firebase from 'firebase';
require ('@firebase/firestore');

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCE1oXBoEBfQaQXWbXkNd-fkc7YHWbov3I",
    authDomain: "story-hub-e501d.firebaseapp.com",
    projectId: "story-hub-e501d",
    storageBucket: "story-hub-e501d.appspot.com",
    messagingSenderId: "484852981575",
    appId: "1:484852981575:web:16d1faf4609da54987b662"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore();