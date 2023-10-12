import { useState } from 'react'
import appFirebase from '../credentials'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import '../App.css'
import Home from '../../src/pages/Home';
import Login from '../components/Login';


const auth = getAuth(appFirebase)


function FirstPage() {

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

export default FirstPage;
