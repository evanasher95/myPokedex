import React from 'react';
import Modal from "react-bootstrap/Modal";

const modalInput = (props) => {
    let content = null;

    if (props.status){
        content = (
            <div>
                <Modal show={props.show} onHide={props.hide} >
                    <Modal.Header closeButton>
                    <Modal.Title>Pokemon caught</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <p>Give a nickname</p>
                            <input onChange={props.changed} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <button className="btn btn-success" variant="primary" onClick={props.onAddPokemon}>
                        Save
                    </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
    else {
        content = (
            <div>
                <Modal show={props.show} onHide={props.hide}>
                    <Modal.Header closeButton>
                    <Modal.Title>Failed</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>The Pokemon fled</p>
                    </Modal.Body>
                    <Modal.Footer>
                    <button className="btn btn-danger" variant="primary" onClick={props.hide}>
                        Return
                    </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

    return(
        <div>
            {content}
        </div>
        
    );
}

export default modalInput;