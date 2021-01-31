import React, {useEffect} from 'react';
import $ from "jquery";

import international from '../assets/images/international.jpg';
import meeting from '../assets/images/meeting.jpg';
import conference from '../assets/images/conference.jpg';
import './styles/mainbanner.css';

const MainBanner = () => {
    useEffect(() => {
        $(document).ready(function(){
            $('.carousel').carousel({
                interval: 3000
            })
        })
    }, []);

    const carousel_items = [international, meeting, conference];

    return (
        <main id="main">
            <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
                <div className="carousel-inner">
                    {carousel_items.map((img, index) => (
                        <div key={`N${index} Slide`} className={!index ? "carousel-item active" : "carousel-item"}>
                            <img className="d-block w-100" src={img} alt={`N${index} Slide`}/>
                        </div>
                    ))}
                </div>

                <div className="overlay carousel-caption">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 offset-md-6 text-center text-md-right">
                                <h1>Völkin'Conf International</h1>
                                <p className="d-none d-md-block">
                                    Völkin Conf llega por primera vez a la escena internacional! Un evento para
                                    compartir con
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
}

export default MainBanner;