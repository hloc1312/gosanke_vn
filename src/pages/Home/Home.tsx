import React from 'react'
import Creating from './Creating/Creating'
import Koi from './Koi/Koi'
import Introduce from './Introduce/Introduce'
import Facility from './Facility/Facility'
import WeDo from './WeDo/WeDo'
import Company from './Company/Company'
import History from './History/History'
import VideoFooter from './VideoFooter/VideoFooter'
import FooterImage from './FooterImage/FooterImage'
import ButtonBackToTop from '../../components/Atoms/ButtonBackToTop/ButtonBackToTop'

const Home = () => {
  return (
    <>
      <Creating></Creating>
      <Koi/>
      <Introduce></Introduce>
      <Facility></Facility>
      <WeDo></WeDo>
      <Company/>
      <History></History>
      <VideoFooter/>
      <FooterImage/>
      <ButtonBackToTop/>
    </>
  )
}

export default Home