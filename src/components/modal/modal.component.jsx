import { useState } from 'react';

// import ContactForm from '../Contact/ContactForm'

// import ModalContext from '../../../context/modal-context'

import './modal.styles.scss';

const Modal = (props) => {
  //   const modalCtx = useContext(ModalContext)

  return (
    <section className="modal">
      <h2>I am a modal</h2>
      <button>Click</button>
    </section>
  );
};

export default Modal;
