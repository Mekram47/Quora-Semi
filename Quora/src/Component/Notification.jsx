import React from 'react'
import Filters from './Filters'
import './css/Notification.css'
import NotificationBody from './NotificationBody'
export default function Notification() {
  return (
    <>
      <div className="NotificationsContainer">
     <div className="Ncontainer2">
    
     <Filters/>
    
      <NotificationBody/>
      
     </div>
      </div>
    </>
  )
}
