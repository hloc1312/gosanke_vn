import React from 'react'
import './cardKoi.css'
type ChilProps = React.HTMLAttributes<HTMLDivElement>&{
    koiLight: string;
    koiImg: string;
    years: string;
    quality: string;
}
const CardKoi: React.FC<ChilProps> = ({
    koiLight,
    koiImg,
    years,
    quality
}) => {
  return (
    <div className='wow fadeIn' data-wow-delay="1s" data-wow-duration="1s">
        <a href={koiLight} data-lightbox="koi" className='card-koi-light' >
            <img src={koiImg} alt="..." className='card-koi-img' />
        </a>
        <span className='card-koi-year'>{years}</span>
        
        <span className='card-koi-quality'>{quality}</span>
       
    </div>
  )
}

export default CardKoi