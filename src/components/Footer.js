import React from 'react';

import './styles/footer.css';

const Footer = () => {
    const links = ["Preguntas Frecuentes", "Contacto", "Prensa", "Conferencias", "Terminos y Condiciones", "Privacidad",  "Carreras"];

    return (
        <footer id="footer" className="pb-4 pt-4 bg-secondary">
            <div className="container">
                <div className="row text-center">
                    {/* Iterates through the links given above and creates a grid */}
                    {links.map((link, index) => (
                        <div key={index} className="col-md-4 col-lg">
                            <button className="btn btn-link">{link}</button>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;