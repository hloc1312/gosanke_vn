import React from "react";
import './cardWeDo.css';
type ChilProps = React.HTMLAttributes<HTMLDivElement>&{
    image: string;
    nameLightBox: string;
    contentMonth?: string;
}

const CardWeDo:React.FC<ChilProps> = ({
    image,
    nameLightBox,
    contentMonth

}) => {
  return (
    <div>
      <a href={image} data-lightbox={nameLightBox} className="card-we-do-light">
        <img src={image} alt="..." className="card-we-do-img" />
      </a>
      {contentMonth && <span>{contentMonth}</span>}
    </div>
  );
};

export default CardWeDo;
