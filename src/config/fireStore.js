import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDBjVFTW1SFjFoQfqVq3RedM0-fQlP0HIY",
    authDomain: "hooks-chatroom.firebaseapp.com",
    databaseURL: "https://hooks-chatroom.firebaseio.com",
    projectId: "hooks-chatroom",
    storageBucket: "hooks-chatroom.appspot.com",
    messagingSenderId: "638304324772",
    appId: "1:638304324772:web:152251ccc7dbf715b0aa31"
};


firebase.initializeApp(firebaseConfig)
export default firebase.firestore()
