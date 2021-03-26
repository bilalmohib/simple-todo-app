import * as firebase from 'firebase'
import 'firebase/database'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyB0qu3eqJ7TUa7rra6hhCBMGer69EBQSMc",
    authDomain: "reactodo7896.firebaseapp.com",
    databaseURL: "https://reactodo7896.firebaseio.com",
    projectId: "reactodo7896",
    storageBucket: "reactodo7896.appspot.com",
    messagingSenderId: "266831895159",
    appId: "1:266831895159:web:a53520ca966db1b2844472",
    measurementId: "G-M6NZGS7PC9"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);