import React from 'react'
import './MiddleSidebar.css'
import lara from '../../assets/images/lara.png';
import heart_black from '../../assets/images/heart_black.svg';
import heart_white from '../../assets/images/heart_white.svg';
import comment from '../../assets/images/comment.svg';
import share from '../../assets/images/share.svg';
import thomas_j from '../../assets/images/thomas_j.png'
import frame1 from '../../assets/images/frame1.png';
import frame2 from '../../assets/images/frame2.png';
import frame3 from '../../assets/images/frame3.png';
import frame4 from '../../assets/images/frame4.png';
import star from  '../../assets/images/star.svg';
import ArtItem from '../ArtItem/ArtItem';

function MiddleSidebar() {
  const artData=[
    {
      image:frame1,
      description:"Modern Wall Decor Framed Painting",
      rate:"$199.99",
      starimg:star
    },
    {
      image:frame2,
      description:"Modern Wall Decor Framed Painting",
      rate:"$199.99",
      starimg:star
    },
    {
      image:frame3,
      description:"Modern Wall Decor Framed Painting",
      rate:"$199.99",
      starimg:star
    },
    {
      image:frame4,
      description:"Modern Wall Decor Framed Painting",
      rate:"$199.99",
      starimg:star
    }
  ]
  return (
    <div className='middlesidebar'>
      <div className="middlesidebar-artpost">
        <div className="middlesidebar-artistpost">
          <img src={lara} alt="" />
          <div className='middlesidebar-artist'>
            <p style={{fontSize:"20px", fontWeight:"600"}}>Lara Leones</p>
            <p style={{fontSize:"15px", fontWeight:"400", color:"#bcbcbc"}}>@thewallart</p>

          </div>
          <div className="middlesidebar-navigation">
            <div className='middlesidebar-dot'></div>
            <div className='middlesidebar-dot'></div>
            <div className='middlesidebar-dot'></div>
          </div>

        </div>
        <p style={{fontSize:"12px", fontWeight:"300"}}>It is along established fact that a reader will be distracted by the readable content of a page when looking at its layout.<span style={{color:"#4545fc"}}>Read More</span></p>
        <div className="middlesidebar-post1">
          <img style={{marginLeft:"420px", marginTop:"10px" ,height:"20px",width:"20px"}} src={heart_white} alt="" />
        </div>
        <div className='middlesidebar-artpostdetails'>
          <img src={heart_black} alt="" />
          <p>9.8k</p>
          <img src={comment} alt="" />
          <p>8.6k</p>
          <img src={share} alt="" />
          <p>7.2k</p>
        </div>

      </div>
      <div className="middlesidebar-artpost">
        <div className="middlesidebar-artistpost">
          <img src={thomas_j}  alt="" />
          <div className='middlesidebar-artist'>
            <p style={{fontSize:"20px", fontWeight:"600"}}>Thomas J</p>
            <p style={{fontSize:"15px", fontWeight:"400", color:"#bcbcbc"}}>@thewallart</p>

          </div>
          <div className="middlesidebar-navigation">
            <div className='middlesidebar-dot'></div>
            <div className='middlesidebar-dot'></div>
            <div className='middlesidebar-dot'></div>
          </div>

        </div>
        <p style={{fontSize:"12px", fontWeight:"300"}}>It is along established fact that a reader will be distracted by the readable content of a page when looking at its layout.<span style={{color:"#4545fc"}}>Read More</span></p>
        <div className="middlesidebar-post2">
          <img style={{marginLeft:"420px", marginTop:"10px" ,height:"20px",width:"20px"}} src={heart_white} alt="" />
        </div>
        <div className='middlesidebar-artpostdetails'>
          <img src={heart_black} alt="" />
          <p>9.8k</p>
          <img src={comment} alt="" />
          <p>8.6k</p>
          <img src={share} alt="" />
          <p>7.2k</p>
        </div>

      </div>
      <div className="middlesidebar-scrollbar">
        <div className="scrollbar-item">
          {artData.map((item,index)=>{
            return <ArtItem key={index} image={item.image} description={item.description}  rate={item.rate} starimg={item.starimg}/ >
          })}
        </div>
  
      </div>



      </div>
  )
}

export default MiddleSidebar