import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyB7SEeJpTIqS8ks1UVQficYsjL_0bFqD_U',
	authDomain: 'messenger-clone-nouri.firebaseapp.com',
	databaseURL: 'https://messenger-clone-nouri.firebaseio.com',
	projectId: 'messenger-clone-nouri',
	storageBucket: 'messenger-clone-nouri.appspot.com',
	messagingSenderId: '685375817033',
	appId: '1:685375817033:web:b7355b363bc7df20898698',
	measurementId: 'G-D6W97ZXPNY',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
