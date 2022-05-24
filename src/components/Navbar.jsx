import React from 'react'

const Navbar = () =>
{
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm">
            <div className="container">
                <a className="navbar-brand" href="#">BookApps</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Favorites</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar