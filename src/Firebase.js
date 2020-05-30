import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBvEExkkpTBf3VYfL7PVScolkMQtP_3q5E",
    authDomain: "reactagenda-93ffc.firebaseapp.com",
    databaseURL: "https://reactagenda-93ffc.firebaseio.com",
    projectId: "reactagenda-93ffc",
    storageBucket: "reactagenda-93ffc.appspot.com",
    messagingSenderId: "753510908364",
    appId: "1:753510908364:web:5396f044547c92efdf9d69"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;