import React from 'react';

const Modal = ({t}) => (
    <div className="modal fade" id="modalCompra" tabIndex="-1" role="dialog" aria-labelledby="modalCompra"
         aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{t('Buttons.buy-tickets')}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label={t('Buttons.close')}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" className="form-control" placeholder={t('Placeholders.user')} aria-label="Username"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </form>
                    <div className="alert alert-warning" role="alert">
                        {t('Placeholders.modal-warning')}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">{t('Buttons.close')}</button>
                    <button type="button" className="btn btn-primary">{t('Buttons.buy')}</button>
                </div>
            </div>
        </div>
    </div>
)

export default Modal;