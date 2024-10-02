/*
    This page contains the code for user login. It makes use of a function component
*/

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {

    // Creating state variables for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Creating an error state variable to display login errors and issues
    const [error, setError] = useState('');

    // To navigate in the React app programmatically
    const navigate = useNavigate();

    // This function gets invoked when the "Log In" button is clicked
    const logIn = async () => {
        try {
            // the first arg to the function is a Firebase auth reference, which is the "getAuth()"
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }
    
    return (
        <>
            <h1>Log In</h1>
            {error && <p className="error">{error}</p>}
            <input
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <input 
                type="password"
                placeholder="Your password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            <button onClick={logIn} className="btnAnimation">Log In</button>
            <h4>Don't have an account? <Link to="/create-account">Sign up</Link></h4>
        </>
    );
}

export default LoginPage;