import React from 'react';

const Modal = () => (
    <div className="modal fade" id="modalCompra" tabIndex="-1" role="dialog" aria-labelledby="modalCompra"
         aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Comprar Tickets</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Cerrar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </form>
                    <div className="alert alert-warning" role="alert">
                        Se te enviar&aacute; un correo de confirmaci&oacute;n si sales sorteado.
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    </div>
)

export default Modal;