import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages/';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
	const { user } = useAuthListener();
	console.log(user);
	return (
		<Router>
			<IsUserRedirect loggedInPath={ROUTES.BROWSE} user={user} path={ROUTES.SIGN_IN}>
				<Signin />
			</IsUserRedirect>

			<IsUserRedirect loggedInPath={ROUTES.BROWSE} user={user} path={ROUTES.SIGN_UP}>
				<Signup />
			</IsUserRedirect>

			<ProtectedRoute user={user} path={ROUTES.BROWSE}>
				<Browse />
			</ProtectedRoute>

			<IsUserRedirect exact loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} user={user}>
				<Home />
			</IsUserRedirect>
		</Router>
	);
}
