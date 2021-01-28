import React from 'react';

import hawaii from '../assets/images/hawaii.jpg';
import hawaii2 from '../assets/images/hawaii2.jpg';
import hawaii3 from '../assets/images/hawaii3.jpg';
import './styles/mainbanner.css';

const MainBanner = () => (
    <main id="main">
        <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={hawaii} alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={hawaii2} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={hawaii3} alt="Third slide"/>
                </div>
            </div>

            <div className="overlay carousel-caption">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 offset-md-6 text-center text-md-right">
                            <h1>Platzi Conf Hawaii</h1>
                            <p className="d-none d-md-block">
                                Platzi Conf llega por primera vez a Hawaii! Un evento para compartir con
                                nuestra comunidad experiencias de expertos que est&aacute;n
                                creando el futuro de internet. Ven a conocer a miembros del Team Platzi y a
                                los oradores de primer nivel que tenemos para ti. Te Esperamos!</p>
                            <a href="#become-speaker" className="btn btn-outline-light mr-2">Quiero ser orador</a>
                            <button type="button" className="btn btn-platzi ml-2" data-toggle="modal"
                                    data-target="#modalCompra">Comprar Tickets
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
);

export default MainBanner;