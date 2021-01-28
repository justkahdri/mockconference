import React from 'react';

import './styles/footer.css';

const Footer = () => (
    <footer id="footer" className="pb-4 pt-4">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-4 col-lg">
                    <a href="#">Preguntas Frecuentes</a>
                </div>
                <div className="col-md-4 col-lg">
                    <a href="#">Contacto</a>
                </div>
                <div className="col-md-4 col-lg">
                    <a href="#">Prensa</a>
                </div>
                <div className="col-md-4 col-lg">
                    <a href="#">Conferencias</a>
                </div>
                <div className="col-md-4 col-lg">
                    <a href="#">Terminos y Condiciones</a>
                </div>
                <div className="col-md-4 col-lg">
                    <a href="#">Privacidad</a>
                </div>
                <div className="col-md-4 col-lg">
                    <a href="#">Estudiantes</a>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;