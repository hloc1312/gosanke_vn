import React from 'react'
import './koi.css'
import CardKoi from '../../../components/Molecules/CardKoi/CardKoi'
const Koi = () => {
  return (
    <div className='koi grid grid-cols-4 gap-x-1 gap-y-[30px] wow backInLeft' data-wow-delay="2s" data-wow-duration="2s">
        {
            [...Array(12)].map((x:number, i: number)=>{
                return <CardKoi koiLight={require(`../../../assets/images/koi/koi_light_${i+1}.png`)} koiImg={require(`../../../assets/images/koi/koi_img_${i+1}.png`)} key={i} years={`${2010+i}`} quality='Best in Variety'></CardKoi>
            })
        }
      
    </div>
  )
}

export default Koi