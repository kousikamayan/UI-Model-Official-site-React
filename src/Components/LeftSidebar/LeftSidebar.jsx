import React, { useState } from 'react'
import './LeftSidebar.css'
import home from '../../assets/images/home.svg';
import notification from '../../assets/images/notification.svg'
import shop from '../../assets/images/heart.svg';
import convo from '../../assets/images/message.svg';
import wallet from '../../assets/images/wallet.svg';
import subscribe from '../../assets/images/favorite.svg';
import profile from '../../assets/images/profile.svg';
import settings from '../../assets/images/setting.svg';
import logout from '../../assets/images/logout.svg';

function LeftSidebar() {

    const [field,setField]=useState('home')
  return (
    <div className='leftsidebar'>
     
            <div className="leftsidebar-fields">
                <div className="leftsidebar-field" onClick={()=>setField("home")}>
                   {field=="home"?<><hr/>                      
                   <img src={home} alt="" />
                    <p style={{color:"black"}}>Home</p>
                    </>:
                   
                   <>
                    <img src={home} alt="" />
                    <p>Home</p>
                   </>}

                    
                </div>
                <div className="leftsidebar-field" onClick={()=>setField("notify")}>
                {field=="notify"?<><hr style={{color:"black", width:"2px",height:"25px"}}/>                      
                   <img style={{color:"black"}}  src={notification} alt="" />
                    <p style={{color:"black"}}>Notification</p>
                    </>:
                   
                   <>
                    <img src={notification} alt="" />
                    <p>Notification</p>
                   </>}
                </div>
                <div className="leftsidebar-field" onClick={()=>setField("shop")}>
                {field=="shop"?<><hr/>                      
                   <img src={shop} alt="" />
                    <p style={{color:"black"}}>Shop</p>
                    </>:
                   
                   <>
                    <img src={shop} alt="" />
                    <p>Shop</p>
                   </>}
                </div>
                <div className="leftsidebar-field" onClick={()=>setField("convo")}>
                {field=="convo"?<><hr/>                      
                   <img src={convo} alt="" />
                    <p style={{color:"black"}}>Conversation</p>
                    </>:
                   
                   <>
                    <img src={convo} alt="" />
                    <p>Conversation</p>
                   </>}
                </div>
                <div className="leftsidebar-field" onClick={()=>setField("wallet")}>
                {field=="wallet"?<><hr/>                      
                   <img src={wallet} alt="" />
                    <p style={{color:"black"}}>Wallet</p>
                    </>:
                   
                   <>
                    <img src={wallet}alt="" />
                    <p>Wallet</p>
                   </>}
                </div>
                <div className="leftsidebar-field" onClick={()=>setField("subscribe")}>
                {field=="subscribe"?<><hr/>                      
                   <img src={subscribe} alt="" />
                    <p style={{color:"black"}}>Subscription</p>
                    </>:
                   
                   <>
                    <img src={subscribe} alt="" />
                    <p>Subscription</p>
                   </>}
                </div>
                <div className="leftsidebar-field" onClick={()=>setField("profile")}>
                {field=="profile"?<><hr/>                      
                   <img src={profile} alt="" />
                    <p style={{color:"black"}}>My Profile</p>
                    </>:
                   
                   <>
                    <img src={profile} alt="" />
                    <p>My Profile</p>
                   </>}
                </div>
                <div className="leftsidebar-field" onClick={()=>setField("settings")}>
                {field=="settings"?<><hr/>                      
                   <img src={settings} alt="" />
                    <p style={{color:"black"}}>Settings</p>
                    </>:
                   
                   <>
                    <img src={settings} alt="" />
                    <p>Settings</p>
                   </>}
                </div>
                <div className="leftsidebar-field leftsidebar-logout">
                    <img src={logout} alt="" />
                    <p>Log out</p>
                </div>

            
            </div>
            <div className="leftsidebar-info">
                <div>
                    <p>2022@logo name</p>
                </div>
                <div>
                    <p>Developed by ivan infotech</p>
                </div>
            </div>
           
       

    </div>
  )
}

export default LeftSidebar