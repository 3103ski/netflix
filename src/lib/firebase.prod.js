import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// need to seed the database

// we need a config
const config = {
	apiKey: 'AIzaSyDYqbAeGit-wu9GBJ6N1fo2O-ItQcCjv1M',
	authDomain: 'netflix-e0ef2.firebaseapp.com',
	databaseURL: 'https://netflix-e0ef2.firebaseio.com',
	projectId: 'netflix-e0ef2',
	storageBucket: 'netflix-e0ef2.appspot.com',
	messagingSenderId: '303620446341',
	appId: '1:303620446341:web:f69972ede4d9ed954771ec',
};
const firebase = Firebase.initializeApp(config);

export { firebase };
