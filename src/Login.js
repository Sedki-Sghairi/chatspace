import React from 'react';
import './login.css';
const Login = () => {
	const handleRegister = () => {
		console.log('registering ...');
	};
	const handleLogin = () => {
		console.log('login ...');
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
				<input placeholder="Full name" type="text" />
				<input placeholder="Email" type="email" />
				<input placeholder="Password" type="password" />
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
