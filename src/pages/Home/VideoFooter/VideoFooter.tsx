import React from "react";
import ReactPlayer from "react-player";
import videoIntro from "../../../assets/video/video_intro.mp4";
import imageQueen from '../../../assets/images/footer/footer_card_queen.jpg'
import imageFish from '../../../assets/images/footer/footer_fish.jpg'
import "./videoFooter.css";
import Button from "../../../components/Atoms/Button/Button";
const VideoFooter = () => {
  return (
    <div className="video-footer">
      <ReactPlayer
        url={videoIntro}
        playing={true}
        width="100%"
        height="100%"
        muted={true}
        volume={1}
        loop
        className="footer-video"
      ></ReactPlayer>
      <div className="overlay"></div>
      <div className="video-footer-wrapper grid grid-cols-2">
        <div className="video-footer-wrapper-left">
          <div className="card">
            <div className="card-wrapper">   
                <p>
                  <img
                    src={imageQueen}
                    height={58}
                    width={139}
                    alt=""
                  />
                </p>
                <p className="f_title">AWARDS</p>
                <p className="f_content">
                  Let us introduce you to Omosako Koi Farm carp which have been
                  awarded numerous prizes.
                </p>
                
                  <Button title="All At a Glance"/>
                
              
            </div>
          </div>
        </div>
        <div className="video-footer-wrapper-left">

        <div className="card">
            <div className="card-wrapper">   
                <p>
                  <img
                    src={imageFish}
                    height={58}
                    width={139}
                    alt=""
                  />
                </p>
                <p className="f_title">GROWTH</p>
                <p className="f_content">
                How carp grow up
                <br />
                <br />
                &nbsp;
                &nbsp;
                </p>
                
                  <Button title="See the list"/>
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;
