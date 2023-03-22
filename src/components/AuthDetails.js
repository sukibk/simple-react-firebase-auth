import {onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from '../firebase'
import {useEffect, useState} from "react";

export const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user)
            }
            else{
                setAuthUser(null)
            }
        })

        return ()=>{
            listen();
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out successful')
        }).catch(error => console.log(error))
    }

    return <div>
        {authUser ? (<><p>{`Signed In: ${authUser.email}`}</p>
            <button onClick={userSignOut}>Sign Out</button>
        </>) : <p>Signe Out</p>}
    </div>
}