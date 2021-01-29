import React from 'react';
import ScrollSpy from "react-scrollspy";

import logo from '../assets/images/logo.png';
import './styles/header.css';

const Header = ({links}) => (
    <header id="header" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#main">
                <img src={logo} alt="Völks logo" className="main-logo"/>
                Völkin' Conf 2025
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ScrollSpy items={["main", "speakers", "place-time", "become-speaker"]}
                           className="navbar-nav ml-auto" currentClassName="active">
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
                        <a className="nav-link" href="#become-speaker" referrerPolicy="tag">Conviertete en orador</a>
                    </li>
                    <li className="nav-item">
                        <button className="btn nav-link text-primary" data-toggle="modal" data-target="#modalCompra">Comprar
                            Tickets</button>
                    </li>
                </ScrollSpy>
            </div>
        </div>

    </header>
)

export default Header;