import React from 'react';
import ScrollSpy from "react-scrollspy";

import logo from '../assets/images/logo.png';
import './styles/header.css';

const Header = ({availableLanguages, updateTranslation}) => {
    const [currentLanguage, setCurrentLanguage] = React.useState("EN");

    const handleDropdown = (code) => {
        updateTranslation(code);
        setCurrentLanguage(code.toUpperCase());
    }
    return (
        <header id="header" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top justify-content-between">
                <div />
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

                        </ScrollSpy>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="btn nav-link text-primary" data-toggle="modal" data-target="#modalCompra">Comprar
                                    Tickets</button>
                            </li>
                        </ul>
                    </div>
                </div>

            <div className="dropdown">
                <button className="btn btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {currentLanguage}
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    {Object.entries(availableLanguages).map(([key, value]) => (
                        <button onClick={() => handleDropdown(key)}
                                key={key} className="btn btn-link dropdown-item">{value}
                        </button>
                    ))}
                </div>
            </div>

        </header>
    );
}

export default Header;