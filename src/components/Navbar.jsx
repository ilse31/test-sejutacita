import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () =>
{
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm">
            <div className="container">
                <NavLink className="navbar-brand" to={ '/' }>BookApps</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={ '/favorites' }>Favorites</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar