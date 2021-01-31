import React from 'react';
import ScrollSpy from "react-scrollspy";

import logo from '../assets/misc/logo.png';
import './styles/header.css';

const Header = ({fromParent, updateTranslation, t}) => {
    const [currentLanguage, setCurrentLanguage] = React.useState(fromParent);

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
                                <a className="nav-link" href="#main">{t('Buttons.conference')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#speakers">{t('Buttons.the-speakers')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#place-time">{t('Buttons.place-time')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#become-speaker" referrerPolicy="tag">{t('Buttons.become-speaker.1')}</a>
                            </li>

                        </ScrollSpy>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="btn nav-link text-primary" data-toggle="modal" data-target="#modalCompra">
                                    {t('Buttons.buy-tickets')}
                                </button>
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
                    <button onClick={() => handleDropdown('en')} className="btn btn-link dropdown-item">
                        English
                    </button>
                    <button onClick={() => handleDropdown('es')} className="btn btn-link dropdown-item">
                        Español
                    </button>
                </div>
            </div>

        </header>
    );
}

export default Header;