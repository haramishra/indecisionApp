import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="selected option"
        onRequestClose={props.closeModal}
        closeTimeoutMS={200}
        className="modal"
    >
        <h1 className="modal__title">You Selected</h1>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button onClick={props.closeModal} className="button">close</button>
    </Modal>
);

export default OptionModal;