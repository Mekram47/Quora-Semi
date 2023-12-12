import React from 'react'
import QuoraHeader from './QuoraHeader'
import QuoraBody from './QuoraBody'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notification from './Notification'

function Quora({closeQuora}) {
  return (
    <>
    {/* importing header and rout */}
    <BrowserRouter>

    {/* importing Quora header */}
    <QuoraHeader closeQuora={closeQuora}/>  
    <Routes> 
     
     {/* importing quora body with its route */}
       <Route path="/" element={<QuoraBody/>}/>
     
       <Route path="/QuoraBody" element={<QuoraBody/>}/>

       {/* // importing quora notificaation page with its route  */}
      <Route path="/Notification" element={<Notification/>}/>
    </Routes>
     </BrowserRouter>
    </>
  )
}

export default Quora
