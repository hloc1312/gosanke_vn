import React from 'react'
import './weDo.css'
import SlideSwiper from '../../../components/Organisms/SlideSwiper/SlideSwiper'

import CardWeDo from '../../../components/Molecules/CardWeDo/CardWeDo'
const WeDo = () => {
  return (
    <div className='facility weDo' id='weDo'>
        <h2 className='title'>
         What We Do
        </h2>
        <p className='content'>What we do at our farm in a year。</p>
        
        <div className='weDo-slider'>
            <SlideSwiper></SlideSwiper>
        </div>

        <div className='weDo-month'>
            <div className="weDo-month-wrapper">
                <h3 className='month-title'>May to July</h3>
                <div className='grid grid-cols-2 gap-2.5'>
                    <CardWeDo image={require('../../../assets/images/months/month_1.jpg') } nameLightBox='may' 
                        contentMonth='Spawning, or laying eggs'
                    ></CardWeDo>
                    <CardWeDo image={require('../../../assets/images/months/month_2.jpg') } nameLightBox='may' 
                        contentMonth='Koi eggs'
                    ></CardWeDo>
                </div>
            </div>

            <div className="weDo-month-wrapper">
                <h3 className='month-title'>June to September</h3>
                <p>After hatching, koi are screened as they grow bigger.</p>
                <div className='grid grid-cols-2 gap-2.5'>
                    <CardWeDo image={require('../../../assets/images/months/month_1.jpg') } nameLightBox='june' 
                        
                    ></CardWeDo>
                    <CardWeDo image={require('../../../assets/images/months/month_2.jpg') } nameLightBox='june' 
                        
                    ></CardWeDo>
                 
                </div>
                <p>Grown-up Nishikigoi are released into a big Noike to get even bigger.</p>
                <div className='grid grid-cols-2 gap-2.5'>
                    <CardWeDo image={require('../../../assets/images/facility/facility_1.jpg') } nameLightBox='june' 
                        
                    ></CardWeDo>

                    <CardWeDo image={require('../../../assets/images/facility/facility_2.jpg') } nameLightBox='june' 
                        
                    ></CardWeDo>
                 
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default WeDo