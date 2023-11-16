import React from 'react'
import './modal.css'

function Modal({ isOpen, onClose }) {


if (!isOpen){
    return null;
}else{
    return (
        <div className="modal">
          <div className="modalContent">
            <span className="close" onClick={onClose}>&times;</span>
            <h2>Exclusive Partnership Program</h2>
            <p>Storecode is gearing up to collaborate with major shopping brands. As an Influencer on our platform, you gain a fantastic advantage <span>your very own personal store on our website.</span> This store is powered by your influence and recommendations. 🛒💃🕺</p>
            <p>Here's the twist: We encourage you not to reveal the exact websites from which you purchase the products you promote in your new videos henceforth. Instead, keep it a secret 🤫🤭 under the code you share. Why? Because disclosing sites directly can create unnecessary competition and, in many cases, lead to users buying directly from those mentioned sites, bypassing all your hard work. 🙈💼</p>
            <p>By sharing your unique code, your followers are directed to the product on your recommended site. As we embark on our collaboration with major brands, your influencer status will transform into a powerful partnership program, offering you the opportunity to earn from every purchase made through your unique codes. Your influence becomes your earning potential. 💰💡</p>
            <p>This approach ensures that your hard work as an influencer is rewarded, and it aligns perfectly with our mission to create a win-win ecosystem for influencers and their followers. Get ready to make the most of this exclusive partnership program with Storecode! ✨</p>
            <button>Register Now!</button>
          </div>
        </div>
      );
}
}

export default Modal;
