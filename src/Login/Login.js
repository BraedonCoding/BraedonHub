import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'Test' && password === 'Test') {
            alert('Logged in');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className='Login'>
            <h1>Login Page</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="username-input"
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
            />
            <br />
            <button onClick={handleLogin} className="login-button">Login</button>
        </div>
    );
}

export default Login;
