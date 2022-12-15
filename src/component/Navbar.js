import React from 'react';
import { Link } from "react-router-dom";
import { FaStackOverflow } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <div className="navbar-brand"><FaStackOverflow/></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/inscription" className="nav-link" >Inscription</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/connexion" className="nav-link">Se connecter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/User" className="nav-link">User</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;