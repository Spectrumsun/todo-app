import React from 'react';


interface Props {
  children: React.ReactNode;
  setOpenModal: (value: boolean) => void;
  title: string;
}

const Modal: React.FC<Props> = ({ children, setOpenModal, title }) => {

  return (
    <>
    <div id="myModal" className="modal">
    <div className="modal__content">
      <div className="modal__title">
      <h2>{title}</h2>
      <span className="modal__close" onClick={() => setOpenModal(false)}>&times;</span>
      </div>
      {children}
      </div>
    </div>
    </>
  )
}

export default Modal;
