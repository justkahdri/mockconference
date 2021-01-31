import React from 'react';

const SpeakersContainer = ({children, tlate}) => (
    <section id="speakers" className="mt-4">
        <div className="container">
            <div className="row">
                <div className="col text-center text-uppercase">
                    <small>{tlate('Speakers.meet')}</small>
                    <h2>{tlate('Speakers.2')}</h2>
                </div>
            </div>
            <div className="row">
                {children}
            </div>
        </div>
    </section>
)

export default SpeakersContainer;