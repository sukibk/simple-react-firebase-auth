import {useState} from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase'

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => console.log(userCredentials))
            .catch(error => console.log(error));
    }

    return <div className='sign-in-container'>
        <form onSubmit={signUp}>
            <h1>Sign Up</h1>
            <input type='email' placeholder='Enter e-mail' value={email}
                   onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' placeholder='Enter password' value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>SIGN UP</button>
        </form>
    </div>
}