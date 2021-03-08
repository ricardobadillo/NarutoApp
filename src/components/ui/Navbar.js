import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    NarutoApp
                </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/Protagonista"
                        >
                            Protagonistas
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/Secundario"
                        >
                            Secundarios
                        </NavLink>
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/Antagonista"
                        >
                            Antagonistas
                        </NavLink>
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/search"
                        >
                            Search
                        </NavLink>
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}