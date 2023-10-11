import React from 'react'
//import RandomCharacterButton from './Random';

const Navbar = ({ brand }) => {
    return (

        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand text-uppercase" href="/">Rick and Morty App{brand} </a>


                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Options
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {/* Aquí puedes agregar elementos de la lista desplegable */}
                        <a className="dropdown-item" href="/">
                            option 1
                        </a>
                        <a className="dropdown-item" href="/">
                            Option 2
                        </a>
                        <a className="dropdown-item" href="/">
                            Option 3
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Navbar
