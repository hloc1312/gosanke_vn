import React from 'react'
import logo from '../../../assets/images/logo.png'
import './creating.css'
// @ts-ignore
import WOW from 'wowjs';
import {useEffect} from 'react'
const Creating = () => {
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
  return (
    <div className='creating pt-[70px] pb-[65px]'>
        <div className="creating-title h-[350px] w-full anim_in wow" >
            <h2 data-wow-delay="1s" className='wow fadeIn' data-wow-duration='1s'>
                Creating a New
                <br />
                Generation of SHIRO-UTSURI,
                <br />
                to surpass GO-SANKE
            </h2>
            <p> 
                <img src={logo} alt="logo GOSANKE-VN"  className='wow bounceIn' data-wow-duration='2s'/>
            </p>
        </div>        
    </div>
  )
}

export default Creating