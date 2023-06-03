import React from "react";
import './introduce.css'
import bg_1 from '../../../assets/images/introduce/i_1.jpg'
import bg_2 from '../../../assets/images/introduce/i_2.jpg'
import bg_3 from '../../../assets/images/introduce/i_3.jpg'
const Introduce = () => {
  return (
    <div className="introduce">
      <div className="introduce-wrapper">
        <p>
          <strong>GOSANKE-VN FARM</strong> was founded in Kure City, Hiroshima Pref., to sell
          Nishikigoi in 1960.
        </p>
        <p>
          Enchanted by Nishikigoi, Ryuzo Omosako, the founder, made strides to
          promote Nishikogoi sales here.
          <br />
          Driving a truck for hours with a water tank, he brought back
          Nishikigoi from Ojiya City, Niigata Pref., the place of origin of
          Nishikigoi.{" "}
        </p>
        <p>
          From the very beginning, each Nishikigoi has enchanted people by its
          one and only pattern. No Nishikigoi has the same pattern as others.{" "}
        </p>
        <p>
          Among many Nishikigoi breeds, ‘Shiro-Utsuri’, with its patterns
          consisting of black and white, is a key breed to us.
        </p>
        <p>
          At present, our koi farm is located at Tochihara Cho, Kure City,
          specializing in producing ‘Shiro-Utsuri’, shifting our business more
          to production from distribution.
        </p>
        <p>
          <strong className="text-[#a58001]">
            Awarded in ‘Shiro-Utsuri’ category for 12 consecutive years
          </strong>
        </p>
        <p>
          Our ‘Shiro-Utsuri’ has come to win more prizes at different fairs
          recently.
          <br />
          Among others, at annual ‘All Japan Comprehensive Nishikigoi Fair’, the
          most authoritative contest in the world, we have won the ‘Grand Prize’
          for 12 consecutive years in the category of ‘Shiro-Utsuri’. <br />
          We would like to thank all the people concerned with Nishikigoi and
          the fans in particular for appreciating our years long endeavour.
        </p>
        <p>Nishikigoi grows day by day</p>
        <p>Breeding technology and its equipment are also making progress</p>
        <p>
          We are resolved to make a progress step by step with a view to
          enchanting every visitor at the first sight of our Nishikigoi.
        </p>
        <p>We would request you to continue to support us.</p>
      </div>
      <div className="grid gap-4 grid-cols-3 introduce-img">
        <img src={bg_1} alt="" />
        <img src={bg_2} alt="" />
        <img src={bg_3} alt="" />
      </div>
    </div>
  );
};

export default Introduce;
