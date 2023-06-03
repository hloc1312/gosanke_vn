import React, { useState } from 'react'
import backToTop from '../../../assets/images/backtotop.png'
import './buttonBackToTop.css'
const ButtonBackToTop = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };
      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
      window.addEventListener('scroll', toggleVisible);
  return (
    <button className='btn-backToTop' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
        <img src={backToTop} alt="" />
    </button>
  )
}

export default ButtonBackToTop