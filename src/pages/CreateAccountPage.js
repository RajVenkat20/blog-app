/*
    This page contains the code for creating a user. It makes use of a function component
*/
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const CreateAccountPage = () => {
    // Creating state variables for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    // Creating an error state variable to display login errors and issues
    const [error, setError] = useState('');

    // To navigate in the React app programmatically
    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if( password !== confPassword ) {
                setError('Password and confirm password do not match');
                return;
            }
            
            // the first arg to the function is a Firebase auth reference, which is the "getAuth()"
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }
    
    return (
        <>
            <h1>Create Account</h1>
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
            <input 
                type="password"
                placeholder="Re-enter your password"
                value={confPassword}
                onChange={e => setConfPassword(e.target.value)} />
            <button onClick={createAccount} className="logInButton">Create Account</button>
            <h4>Already have an account? <Link to="/login">Log in</Link></h4>
        </>
    );

}

export default CreateAccountPage;