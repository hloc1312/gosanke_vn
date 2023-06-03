import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import videoIntro from '../../../assets/video/video_intro.mp4'
import logo from '../../../assets/images/logo.png'
import './videoIntro.css'
const VideoIntro = () => {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div className='video-intro'>
        <ReactPlayer
            url={videoIntro}
            playing={true}
            width="100%"
            height="100%"
            muted={isMuted}
            volume={1}
            loop
            className="video"
        ></ReactPlayer>
        <div className='video-content'>
            <img src={logo} alt="GOSANKE-VN" />
            <h1>GOSANKE-VN FARM</h1>
            <p>VIETNAMESE</p>
        </div>
    </div>
  )
}

export default VideoIntro