import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Notificationbody.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
function NotificationBody() {
  return (
    <>
       <div className="Notification_body_container">
        
      <div className='Heading'>         
      <h4>Notifications</h4>
      <p> Settings</p>
      </div>

                         {/* MAin TExt */}
       <div className='singleNotificationstyl'>
              <div className='profileLogo svg-icon'><Avatar/></div>
              <div className='notifiparagraph'><span className='author'>Adein Scott</span><span className='days'>  Mon</span>
              <h3 className='ques'>Do Idiots Realise that they Idiot ?</h3>
              <p className='view'> Andrew answered this And 26 More</p>
              </div>
              <div className='tripledot'><MoreHorizIcon/></div>
       </div>
       <div className='singleNotificationstyl'>
        <div className='profileLogo svg-icon'><Avatar/></div>
        <div className='notifiparagraph'><span className='author'>Rupesh</span><span className='days'>May 21 </span>
        <h3 className='ques'>How to behave normally in Classy Restuarants ?</h3>
        <p className='view'>Ankit answered this And 345 More </p>
        </div>
        <div  className='tripledot'><MoreHorizIcon/></div>
       </div>
       <div className='singleNotificationstyl'>
           <div className='profileLogo svg-icon'><Avatar/></div>
           <div className='notifiparagraph'><span className='author'>Generative AI</span>
           <span className='days'>May 04</span>
           <h3 className='ques'>How Does Artificial Intelligence (AI) Work and Its Applications </h3>
           <p className='view'> Ekram  answered this And 30045 More </p>
           
           </div>
           <div  className='tripledot'><MoreHorizIcon/></div>
       </div>
      
      </div>
    </>
  )
}

export default NotificationBody
