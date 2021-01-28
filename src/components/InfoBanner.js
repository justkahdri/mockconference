import React from 'react';

import './styles/infobanner.css';
import honolulu from '../assets/images/honolulu.jpg';

const InfoBanner = () => (
    <section id="place-time">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 pl-0 pr-0">
                    <img src={honolulu} alt="Honolulu"/>
                </div>
                <div className="col-lg-6 pt-4 pb-4">
                    <h2>Honolulu - Octubre 2025</h2>
                    <p>
                        Honolulu o Honolulú es la capital y localidad más grande del estado de Hawái, en los Estados
                        Unidos.
                        Honolulu es la más sureña de entre las principales ciudades estadounidenses. Aunque el nombre de
                        Honolulu se refiere al área urbana en la costa sureste de la isla de Oahu, la ciudad y el
                        condado
                        de Honolulu han formado una ciudad-condado consolidada que cubre toda la isla
                        (aproximadamente 600 km² de superficie).
                    </p>
                    <a href="#" className="btn btn-outline-light">Conoce M&aacute;s</a>
                </div>
            </div>
        </div>
    </section>
)

export default InfoBanner;