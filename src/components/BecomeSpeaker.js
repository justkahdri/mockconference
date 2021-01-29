import React, { useEffect } from 'react';
import $ from 'jquery';

const BecomeSpeaker = () => {

    useEffect(() => {
        $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        })
    }, []);

    return (
        <section id="become-speaker" className="pt-3 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col text-center text-uppercase">
                        <small>Convi&eacute;rtete en</small><h2>Orador</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="col text-center">
                        An&oacute;tate como orador para dar una <abbr data-toggle="tooltip" title="Charlas de 5 minutos">
                        charla ignite</abbr>.
                        Cu&eacute;ntanos de qu&eacute; quieres hablar!
                    </p>
                </div>
                <div className="row">
                    <form className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="Nombre"/>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="Apellido"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                    <textarea name="text" className="form-control form-control-lg"
                                              placeholder="Sobre que quieres hablar?"></textarea>
                                <small className="form-text text-muted">
                                    Recuerda incluir un t&iacute;tulo a tu charla
                                </small>
                            </div>
                        </div>
                        <div className="form-row">
                            <button type="button" className="btn btn-primary btn-block">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default BecomeSpeaker;