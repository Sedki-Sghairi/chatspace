import React from 'react';
import './login.css';
import { auth } from './firebase';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
const Login = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ name, setName ] = useState('');
	const dispatch = useDispatch();

	const handleRegister = (e) => {
		e.preventDefault();
		if (!name) {
			return alert('please enter your full name!');
		}
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: ''
							})
						);
					});
			})
			.catch((error) => console.error(error));
	};
	const handleLogin = (e) => {
		e.preventDefault();
	};

	return (
		<div className="login">
			<div className="login__header">
				<h1>
					<span>Chat</span>Space
				</h1>
				<img src="/images/logo.svg" alt="logo" />
			</div>
			<form>
				<input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} type="text" />
				<input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				<input
					placeholder="Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={handleLogin}>Log In</button>
			</form>
			<p>
				Not a member?{' '}
				<button onClick={handleRegister} className="login__register">
					Register Now
				</button>
			</p>
		</div>
	);
};

export default Login;
