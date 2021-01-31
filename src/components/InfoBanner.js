import React from 'react';

import './styles/infobanner.css';
import side_image from '../assets/images/microphone.jpg';

const InfoBanner = ({t}) => {
    const sorted_content = Object.fromEntries(
        Object.entries(t('Info-section', {returnObjects: true})).sort(([,a], [,b]) => a-b)
    );

    return (
        <section id="place-time" className="bg-secondary text-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 pl-0 pr-0">
                        <img src={side_image} alt="Honolulu"/>
                    </div>
                    <div className="col-lg-6 pt-4 pb-4">
                        {Object.entries(sorted_content).map(([key, content], index) => (
                            !index ? <h2 key={key}>{content}</h2> :
                                <p key={key}>{content}</p>
                        ))}
                        <button className="btn btn-outline-light">{t('Buttons.more')}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoBanner;