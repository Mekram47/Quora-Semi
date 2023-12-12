import React from 'react'
import './css/space.css'
import Code from './images/Coding.jpg'
import Edu from './images/Education.jpg'
import Food from './Images/Food.jpg'
import Health from './Images/Health.jpg'
import Psych from './Images/Psychology.jpg'
import Sci from './Images/Science.jpg'
import Tech from './Images/Technology.jpg'
import Trav from './Images/Travelling.jpg'
import { Add } from '@mui/icons-material'


export default function Space() {
  return (
    <>
      <div className='space_container'>
      <div className='space'>
        
      <Add/>
                                      {/* SideContent */}
                 
               <p>Create space</p>
           </div>
           <div className="SidebarOption">
      <img src={Psych} alt="" />
      <p>Psychology</p>
    </div>

    <div className="SidebarOption">
    <img src={Food} alt="" />
      <p>Food</p>
    </div>

    <div className="SidebarOption">
    <img src={Edu} alt="" />
      <p>Education</p>
    </div>

    <div className="SidebarOption">
    <img src={Code} alt="" />
      <p>Coding</p>
    </div>

    <div className="SidebarOption">
    <img src={Tech} alt="" />
      <p>Technology</p>
    </div>

    <div className="SidebarOption">
    <img src={Sci} alt="" />
      <p>Science</p>
    </div>

    <div className="SidebarOption">
    <img src={Health} alt="" />
      <p>Health</p>
    </div>

    <div className="SidebarOption">
    <img src={Trav} alt="" />
      <p>Travelling</p>
    </div>
    <div className="SidebarOption">
      <Add/>
      <p className='text'>Discover Spaces</p>

    </div>

           
      </div>
    </>
  )
}
