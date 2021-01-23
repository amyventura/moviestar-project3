import React from 'react';

import Modal from 'react-bootstrap/Modal';
import './modal.css'


const AlertModal=(props)=> {


    return (
      <Modal
        {...props}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="xl"
        className="special_modal"
      >
        
        <Modal.Body closeButton>
          <div className='preview'>
 <img src={props.activeMovie.poster_url} alt="poster" style={{width:'100%'}} />
           <button className="description__button">
                PLAY
               </button>
               <span className="name">{props.activeMovie.name}</span>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  export default AlertModal;
