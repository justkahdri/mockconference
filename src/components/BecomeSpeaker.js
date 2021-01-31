import React, { useEffect } from 'react';
import $ from 'jquery';

const BecomeSpeaker = ({tlate}) => {

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
                        <small>{tlate('Speakers.become')}</small>
                        <h2>{tlate('Speakers.1')}</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="col text-center">
                        {tlate('Speakers.form.1')} <abbr data-toggle="tooltip" title={tlate('Placeholders.talks')}>
                        {tlate('Speakers.form.2')}</abbr>. {tlate('Speakers.form.3')}
                    </p>
                </div>
                <div className="row">
                    <form className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder={tlate('Placeholders.name')}/>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder={tlate('Placeholders.surname')}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                    <textarea name="text" className="form-control form-control-lg"
                                              placeholder={tlate('Placeholders.about')}>
                                    </textarea>
                                <small className="form-text text-muted">
                                    {tlate('Speakers.form.reminder')}
                                </small>
                            </div>
                        </div>
                        <div className="form-row">
                            <button type="button" className="btn btn-primary btn-block">{tlate('Buttons.send')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default BecomeSpeaker;