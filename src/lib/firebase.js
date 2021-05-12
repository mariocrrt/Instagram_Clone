import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAVzxJU0WcP7TBuyZ2SjKyvBTaTpX1LheI",
    authDomain: "instagram-b0558.firebaseapp.com",
    projectId: "instagram-b0558",
    storageBucket: "instagram-b0558.appspot.com",
    messagingSenderId: "615003161536",
    appId: "1:615003161536:web:dc156946bcbc0f18cc7e25"
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore

export { firebase, FieldValue }