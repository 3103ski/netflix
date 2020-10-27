import userEvent from '@testing-library/user-event';
import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
	const { firebase } = useContext(FirebaseContext);
	useEffect(() => {
		const listener = firebase.auth().onAuthStateChanged((authUser) => {
			if (authUser) {
				console.log(`this is the AuthUser: ${authUser}`);
				localStorage.setItem('authUser', JSON.stringify(authUser));
				setUser(authUser);
			} else {
				console.log(`this is the user: ${user}`);
				localStorage.removeItem('authUser');
				setUser(null);
			}
		});
		return () => listener();
	});
	return { user };
}
