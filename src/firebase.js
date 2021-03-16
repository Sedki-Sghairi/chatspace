import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyCFsF5qRx_KilsDl3ILHnBfFP5-6qfONCI',
	authDomain: 'chatspace-fbdbf.firebaseapp.com',
	projectId: 'chatspace-fbdbf',
	storageBucket: 'chatspace-fbdbf.appspot.com',
	messagingSenderId: '69092983229',
	appId: '1:69092983229:web:a9d9aa675a64709f8992d4',
	measurementId: 'G-2T6QZ84EJN'
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
