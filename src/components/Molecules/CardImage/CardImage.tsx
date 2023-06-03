import React from 'react'
import './cardImage.css'
type ChilProps = React.HTMLAttributes<HTMLDivElement>&{
    image: string;
    content?: string
}
const CardImage: React.FC<ChilProps> = ({
    image,
    content
}) => {
  return (
    <div className='card-image'>
        <a href={image} data-lightbox="facility" className='card-image-light' >
            <i className="fa-solid fa-magnifying-glass-plus card-image-icon"></i>
        </a>
        <img src={image} alt="..." className='card-image-img' />
        <p className='card-image-content'>{content}</p>
    </div>
  )
}

export default CardImage