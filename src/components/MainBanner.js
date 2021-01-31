// DEPENDENCIES
import React, {useEffect} from 'react';
import $ from "jquery";

// STYLES
import './styles/mainbanner.css';

const MainBanner = ({tlate}) => {
    useEffect(() => {
        $(document).ready(function(){
            $('.carousel').carousel({
                interval: 3000
            })
        })
    }, []);

    // Creates a context to import the background carousel
    const req_images = require.context('../assets/carousel');

    return (
        <main id="main">
            <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
                <div className="carousel-inner">
                    {/* Dynamically displays all images in carousel folder */}
                    {req_images.keys().map((img, index) => (
                        <div key={`N${index} Slide`} className={!index ? "carousel-item active" : "carousel-item"}>
                            <img className="d-block w-100" src={req_images(img).default} alt={`N${index} Slide`}/>
                        </div>
                    ))}
                </div>

                <div className="overlay carousel-caption">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 offset-md-6 text-center text-md-right">
                                <h1>{tlate('Main.title')}</h1>
                                <p className="d-none d-md-block">{tlate('Main.body')}</p>
                                <a href="#become-speaker" className="btn btn-outline-light mr-2">
                                    {tlate('Buttons.become-speaker.2')}
                                </a>
                                <button type="button" className="btn btn-primary ml-2" data-toggle="modal"
                                        data-target="#modalCompra">{tlate('Buttons.buy-tickets')}
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