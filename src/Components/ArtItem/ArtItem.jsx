import React from 'react'
import './ArtItem.css'

function ArtItem(props) {
  return (
    <div className="artItem">
    <img src={props.image} alt="" className='artbanner'/>
    <p style={{fontSize:"15px", fontWeight:"500"}}>{props.description}</p>
    <div>
      <div className="artitem-rate">
        <p style={{fontSize:"15px", fontWeight:"600"}}>{props.rate}</p>
        <div className='artitem stars'>
          <img src={props.starimg} alt="" />
          <img src={props.starimg} alt="" />
          <img src={props.starimg} alt="" />
          <img src={props.starimg} alt="" />
          <img src={props.starimg} alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ArtItem