import React from 'react'
import './footer.css'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-up">
            <div className="grid grid-cols-3 footer-up-wrapper">
                <div className="footer-up-left col-span-2">
                    <p className="footer-up-left-logo">
                        <img src={logo} alt="" />
                    </p>
                    <p className='footer-up-left-address'>178 Tochihara Cho, Kure City, 737-0922<br/>Tel&nbsp;0823-33-8903　Fax&nbsp;0823-33-8906</p>
                </div>
                <div className="footer-up-right ">
                    <div className='grid grid-cols-2 gap-3'>
                        <div className='footer-up-right-wrapper'>
                            <i className="fa-solid fa-angle-right"></i>
                            <a href='#top'>home</a>
                        </div>
                        <div className='footer-up-right-wrapper'>
                            <i className="fa-solid fa-angle-right"></i>
                            <a href="#facility">Our Facility</a>
                        </div>
                        <div className='footer-up-right-wrapper'>
                            <i className="fa-solid fa-angle-right"></i>
                            <a href="#weDo">What We Do</a>
                        </div>
                        <div className='footer-up-right-wrapper'>
                            <i className="fa-solid fa-angle-right"></i>
                            <a href="#company">Our Company</a>
                        </div>
                        <div className='footer-up-right-wrapper'>
                            <i className="fa-solid fa-angle-right"></i>
                            <a href="">Awarded As Such</a>
                        </div>
                        <div className='footer-up-right-wrapper'>
                            <i className="fa-solid fa-angle-right"></i>
                            <a href="">How Carp Growup</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-down">
            ©&nbsp;Omosako Koi Farm Co., Ltd.
        </div>
    </div>
  )
}

export default Footer