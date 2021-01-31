import React from 'react';
import './styles/speakercard.css';

const SpeakerCard = (props) => {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
                <figure className="square-ratio">
                    <img className="card-img-top" src={props.avatar} alt={props.name + " Profile"}/>
                </figure>
                <div className="card-body">
                    <div className="badges text-right">
                        {Object.entries(props.badges).map(([key, value], idx) => (
                            <span key={idx} className={"badge mr-2 " + value}>{key.toUpperCase()}</span>
                            ))}
                    </div>
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text text-justify">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default SpeakerCard;