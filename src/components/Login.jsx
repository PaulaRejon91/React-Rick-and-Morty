
import React, { useState } from 'react'
import Imagen1 from '../../src/assets/ram1.webp'
import Imagen2 from '../../src/assets/ramw2.jpg'
import appFirebase from '../credentials'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)


const Login = () => {

    const [register, setRegister] = useState(false) //empieza en falso
    

    return (

        <div className='container'>
            <div className="row">
                {/*Small column*/}
                <div className="col-md-4">
                    <div className="dad">
                        <div className="card card-body shadow-lg">
                            <img src={Imagen1} alt="" className='style-profile' />
                            <form>
                                <input type="text" placeholder='Enter your email here' className='text-box' />
                                <input type="password" placeholder='Enter your password here' className='text-box' />
                                <button className='btnform'>{register ? "Register" : "Login"}</button>
                            </form>
                            <h4 className='text'>{register ? "If you already have an account" : "if you don't have an account"} <button className='btnswicth' onClick={() => setRegister(!register)}>{register ? "Login" : "Register"}</button></h4>
                        </div>
                    </div>

                </div>
                {/*Big column*/}

                <div className='col-md-8'>
                    <img src={Imagen2}
                        alt=""
                        className='size.imagen'
                    />

                </div>
            </div>
        </div>
    )
}

export default Login 