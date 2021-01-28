import React from 'react';

import logo from '../assets/images/logo.png';
import './styles/header.css';

const Header = () => (
    <header id="header" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#main">
                <img src={logo} alt="Platzi logo" className="platzi-logo"/>
                Conf Hawaii
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#main">La conferencia</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#speakers">Los oradores</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#place-time">El lugar y la fecha</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#become-speaker">Conviertete en orador</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-platzi" href="" data-toggle="modal" data-target="#modalCompra">Comprar
                            Tickets</a>
                    </li>
                </ul>
            </div>
        </div>

    </header>
)

export default Header;