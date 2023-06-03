import React from 'react'
import './button.css'
type ChilProps = React.HTMLAttributes<HTMLDivElement>&{
    title:string;
}
const Button:React.FC<ChilProps> = ({
    title
}) => {
  return (
    <>
        <div className='button-footer'>
            <span className='button-footer-title'>
                {title}
            </span>
            <span className="anim_icons_wrap white">
                <i className='anim_icons a_arrow white'></i>
            </span>
        </div>
    </>
  )
}

export default Button