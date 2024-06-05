import React from 'react'
import './RightSidebar.css'
import thomas from '../../assets/images/thomas.png'
import chris from '../../assets/images/chris.png'
import emilie from '../../assets/images/emilie.png'
import jessica from '../../assets/images/jesica.png'
import thomas_j from '../../assets/images/thomas_j.png'
import lara from '../../assets/images/lara.png'
function RightSidebar() {
  return (
    <div className='rightsidebar'>
        <div className="rightsidebar-content">
            <p style={{color:"black"}}>Artists</p>
            <p style={{color:"#808080"}}>Photographers</p>
        </div>
        <div className="rightsidebar-scrollitems">
            <div className="rightsidebar-art1">
                <div className="rightsidebar-arts-artist">
                    <img src={thomas} alt="" />
                    <div className='box'></div>
                    
                    <div className="aboutartist">
                        <p style={{fontSize:"15px", fontWeight:"600"}}>Thomas Edward</p>
                        <p style={{fontSize:"10px" ,marginBottom:"10px"}}>@thewildwithyou</p>
                    </div>
                    </div>
                
            </div>
            <div className="rightsidebar-art2">
                <div className="rightsidebar-arts-artist">
                    <img src={chris} alt="" />
                    <div className='box'></div>
                    
                    <div className="aboutartist">
                        <p style={{fontSize:"15px", fontWeight:"600"}}>Chris Doe</p>
                        <p style={{fontSize:"10px" ,marginBottom:"10px"}}>@thewildwithyou</p>
                    </div>
                    </div>
                
            </div>
            <div className="rightsidebar-art3">
                <div className="rightsidebar-arts-artist">
                    <img src={emilie} alt="" />
                    <div className='box'></div>
                    
                    <div className="aboutartist">
                        <p style={{fontSize:"15px", fontWeight:"600"}}>Emilie Jones</p>
                        <p style={{fontSize:"10px" ,marginBottom:"10px"}}>@thewildwithyou</p>
                    </div>
                    </div>
                
            </div>
            <div className="rightsidebar-art4">
                <div className="rightsidebar-arts-artist">
                    <img src={jessica} alt="" />
                    <div className='box'></div>
                    
                    <div className="aboutartist">
                        <p style={{fontSize:"15px", fontWeight:"600"}}>Jessica Williams</p>
                        <p style={{fontSize:"10px" ,marginBottom:"10px"}}>@thewildwithyou</p>
                    </div>
                    </div>
                
            </div>
            <div className="rightsidebar-art5">
                <div className="rightsidebar-arts-artist">
                    <img src={thomas} alt="" />
                    <div className='box'></div>
                    
                    <div className="aboutartist">
                        <p style={{fontSize:"15px", fontWeight:"600"}}>Thomas Edward</p>
                        <p style={{fontSize:"10px" ,marginBottom:"10px"}}>@thewildwithyou</p>
                    </div>
                    </div>
                
            </div>
            <div className="rightsidebar-art6">
                <div className="rightsidebar-arts-artist">
                    <img src={lara} alt="" />
                    <div className='box'></div>
                    
                    <div className="aboutartist">
                        <p style={{fontSize:"15px", fontWeight:"600"}}>Lara Leones</p>
                        <p style={{fontSize:"10px" ,marginBottom:"10px"}}>@thewildwithyou</p>
                    </div>
                    </div>
                
            </div>
            <div className="rightsidebar-art7">
                <div className="rightsidebar-arts-artist">
                    <img src={thomas_j} alt="" />
                    <div className='box'></div>
                    <div className="aboutartist">
                        <p style={{fontSize:"15px", fontWeight:"600"}}>Thomas J</p>
                        <p style={{fontSize:"10px" ,marginBottom:"10px"}}>@thewildwithyou</p>
                    </div>
                    </div>
                
            </div>
        </div>
        <div className="rightsidebar-info">
            <p>Privacy</p>
            <p>Terms of Service</p>
            <p>Cookie Notice</p>
        </div>

    </div>
  )
}

export default RightSidebar