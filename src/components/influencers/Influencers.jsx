import React from 'react'
import './influencers.css'
import { useState } from 'react'
import Modal from '../modal/Modal'

function Influencers() {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

  return (
    <div className='influSection'>
        <h2>Storecode for Influencers</h2>
        <div className='influDotCont'>
            <div className='influPointCont1'>
                <img src='/money.png' alt='money'/>
                <p>Earn from every purchase made through your unique codes</p>
            </div>
            <div className='influPointCont2'>
                <img src='/store.png' alt='store'/>
                <p>A personal store on our platform powered by your influence</p>
            </div>
            <div className='influPointCont3'>
                <img src='/silence.png' alt='silence'/>
                <p>Keep your recomm sites a secret under your unique code</p>
            </div>
        </div>
        <div className='excCont'>
        <div>Intersted in Our Exclusive Patnership Program?</div>
        <button onClick={openModal}>Read More..</button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    </div>
  )
}

export default Influencers