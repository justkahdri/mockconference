import React from 'react';

import './styles/footer.css';

const Footer = ({t}) => {
    const links = Object.entries(t('Footer', {returnObjects: true}));

    return (
        <footer id="footer" className="pb-4 pt-4 bg-secondary">
            <div className="container">
                <div className="row text-center">
                    {/* Iterates through the links given above and creates a grid */}
                    {links.map(([key, link]) => (
                        <div key={key} className="col-md-4 col-lg">
                            <button className="btn btn-link">{link}</button>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;