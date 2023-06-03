import React from 'react'
import './facility.css'
import CardImage from '../../../components/Molecules/CardImage/CardImage'
const Facility = () => {
  return (
    <div className='facility' id='facility'>
        <h2 className='title'>
         Our Facility
        </h2>
        <p className='content'>Koi grows up carefree in rich nature</p>
        <div className="facility-img">
            <div className='grid grid-cols-1 mb-[1px]'>
                <CardImage image={require('../../../assets/images/facility/facility_1.jpg')} content='What surrounds us'/>
            </div>
            <div className='grid grid-cols-2 gap-0.5'>
            <CardImage content='What We Look Like' image={require(`../../../assets/images/facility/facility_2.jpg`)}></CardImage>
            <CardImage content='Noike, wild pond' image={require(`../../../assets/images/facility/facility_3.jpg`)}></CardImage>
            <CardImage content='Chigyo, fry, pond' image={require(`../../../assets/images/facility/facility_4.jpg`)}></CardImage>
            <CardImage content='House pond' image={require(`../../../assets/images/facility/facility_5.jpg`)}></CardImage>
            </div>
        </div>
    </div>
  )
}

export default Facility