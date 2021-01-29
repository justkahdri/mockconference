import React from 'react';

import './styles/infobanner.css';
import side_image from '../assets/images/microphone.jpg';

const InfoBanner = () => (
    <section id="place-time" className="bg-secondary text-light">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 pl-0 pr-0">
                    <img src={side_image} alt="Honolulu"/>
                </div>
                <div className="col-lg-6 pt-4 pb-4">
                    <h2>COLLABORATION & INNOVATION - Octubre 2025</h2>
                    <p>
                        For more than 10 years, Völkin' regional conference has been the source for education and
                        peer-to-peer exchange for all things enterprise IT and infrastructure.
                        Now, we are finally going international to share the knowledge across the world.
                    </p><p>
                        We know the industry has been disrupted and has accelerated trends in ways we didn’t see coming.
                        It’s time to embrace the change in order to thrive in the future.
                        We want to get back to the business of connecting people, ideas and opportunities.
                        We also know that you want answers and insights on what the future holds for your careers
                        and businesses.
                    </p><p>
                        Our events bring together the latest technology advancements as well as
                        practical examples to solve challenges in business and society.
                    </p><p>
                        Völkin' features sessions on the full scope of digital transformation technologies including
                        Artificial Intelligence and Machine Learning, Observability, DevOps, Performance Engineering,
                        Digital Process, Cloud Native Applications, and the IT infrastructures that support them.
                    </p>
                    <button className="btn btn-outline-light">Conoce M&aacute;s</button>
                </div>
            </div>
        </div>
    </section>
)

export default InfoBanner;