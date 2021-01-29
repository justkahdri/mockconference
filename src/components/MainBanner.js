import React from 'react';

import international from '../assets/images/international.jpg';
import meeting from '../assets/images/meeting.jpg';
import conference from '../assets/images/conference.jpg';
import './styles/mainbanner.css';

const MainBanner = () => (
    <main id="main">
        <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={international} alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={meeting} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={conference} alt="Third slide"/>
                </div>
            </div>

            <div className="overlay carousel-caption">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 offset-md-6 text-center text-md-right">
                            <h1>Völkin' International Conference</h1>
                            <p className="d-none d-md-block">
                                Völkin Conf llega por primera vez a la escena internacional! Un evento para compartir con
                                nuestra comunidad experiencias de expertos que est&aacute;n
                                creando el futuro de internet. Ven a conocer a los miembros del equipo y a
                                los oradores de primer nivel que tenemos para ti. Te Esperamos!</p>
                            <a href="#become-speaker" className="btn btn-outline-light mr-2">Quiero ser orador</a>
                            <button type="button" className="btn btn-primary ml-2" data-toggle="modal"
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