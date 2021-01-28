import React from 'react';

const SpeakersContainer = ({children}) => (
    <section id="speakers" className="mt-4">
        <div className="container">
            <div className="row">
                <div className="col text-center text-uppercase">
                    <small>Conoce a los</small><h2>Oradores</h2>
                </div>
            </div>
            <div className="row">
                {children}
            </div>
        </div>
    </section>
)

export default SpeakersContainer;