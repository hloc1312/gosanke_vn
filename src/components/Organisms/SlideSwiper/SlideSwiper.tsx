import React from 'react'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import CardWeDo from '../../Molecules/CardWeDo/CardWeDo';
const SlideSwiper = () => {
  return (
    <Swiper
    slidesPerView={2}
    spaceBetween={20}
    loop={true}
    centeredSlides={true}
    autoplay={{
    //   delay: 500,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    }}
    pagination={{
      clickable: true,
    }}
    // navigation={true}
    modules={[Autoplay, Pagination]}
    >
        {/* {[...Array(5).map((x:number, i:number)=>{
            return <SwiperSlide key={i}>
                <CardWeDo image={require(`../../../assets/images/weDo/slide/slide_${i+1}.jpg`)}></CardWeDo>
            </SwiperSlide>

        })]} */}

            <SwiperSlide >
                <CardWeDo nameLightBox='slide' image={require(`../../../assets/images/weDo/slide/slide_1.jpg`)}></CardWeDo>
            </SwiperSlide>
            <SwiperSlide >
                <CardWeDo nameLightBox='slide' image={require(`../../../assets/images/weDo/slide/slide_2.jpg`)}></CardWeDo>
            </SwiperSlide>
            <SwiperSlide >
                <CardWeDo nameLightBox='slide' image={require(`../../../assets/images/weDo/slide/slide_3.jpg`)}></CardWeDo>
            </SwiperSlide>
            <SwiperSlide >
                <CardWeDo nameLightBox='slide' image={require(`../../../assets/images/weDo/slide/slide_4.jpg`)}></CardWeDo>
            </SwiperSlide>
            <SwiperSlide >
                <CardWeDo nameLightBox='slide' image={require(`../../../assets/images/weDo/slide/slide_5.jpg`)}></CardWeDo>
            </SwiperSlide>
      
    </Swiper>
  )
}

export default SlideSwiper