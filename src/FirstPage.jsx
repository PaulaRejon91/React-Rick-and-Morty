import { useState } from 'react'
import appFirebase from './credentials/credentials'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import './App.css'
import Home from './Home';
import Login from './Login';


const auth = getAuth(appFirebase)


function FirstApp() {

    const [user, setUser] = useState(null)

    onAuthStateChanged(auth, (userFirebase) => {
        if (userFirebase) {
            setUser(userFirebase)
        }
    })

    return (

        <div>
            {/*Si la variable usuario es true, entonces utiliza Home, sino sigue mostrando el login*/}
            {user ? <Home userMail ={user.email}/> : <Login />}
        </div>


    )

}
