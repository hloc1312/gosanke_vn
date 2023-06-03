import React, { useEffect } from 'react'
import Header from '../../Organisms/Header/Header'
import {Outlet} from 'react-router-dom'
import VideoIntro from '../../../pages/Home/VideoIntro/VideoIntro'
import Footer from '../../Organisms/Footer/Footer'

const HomeTemplate = () => {
  useEffect(() => {
    
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className='home-template'>
        <VideoIntro></VideoIntro>
        <Header></Header>
        <div className="home-template-content pt-[80px]">
            <Outlet></Outlet>
        </div>
        <Footer/>
        
        
    </div>
  )
}

export default HomeTemplate