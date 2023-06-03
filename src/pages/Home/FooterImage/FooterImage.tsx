import React from 'react'
import './footerImage.css'
const FooterImage = () => {
  return (
    <div className='footer-image'>
        <div className='grid grid-cols-3 '>
            {[...Array(6)].map((x:number, i:number)=>{
                return <img src={require(`../../../assets/images/footer/footer_image/ft_${i+1}.jpg`)} alt="" key={i}/>
            })}
            {/* <img src={require(`../../../assets/images/footer/footer_image/ft_1.jpg`)} alt="" />
            <img src={require(`../../../assets/images/footer/footer_image/ft_1.jpg`)} alt="" />
            <img src={require(`../../../assets/images/footer/footer_image/ft_1.jpg`)} alt="" />
            <img src={require(`../../../assets/images/footer/footer_image/ft_1.jpg`)} alt="" />
            <img src={require(`../../../assets/images/footer/footer_image/ft_1.jpg`)} alt="" />
            <img src={require(`../../../assets/images/footer/footer_image/ft_1.jpg`)} alt="" /> */}
        </div>
    </div>
  )
}

export default FooterImage