

import React,{useState} from 'react'
import './css/QuoraHeader.css'
import AddCreatQ from './AddCreatQ'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import { NavLink } from 'react-router-dom';
import Quoraimg from './images/Quora-logo.png'
import { AssignmentTurnedInOutlined, FeaturedPlayListOutlined, NotificationsOutlined, PeopleAltOutlined, Search } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import pic from './images/pic.jpg'
export default function QuoraHeader({closeQuora}) {


//usestate hook for displaying question and answer model popup on click button
        const [displayAddCreatQ,setDisplayAddCreatQ] = useState(false);
        const closeAddCreatQ = ()=> setDisplayAddCreatQ(false);
  return (
    <>
                                      {/* Main Div */}
       <div className='containerHeader'>
           <div className='parentHeader'>  
                
                <div className='quoraLogo'>

                                 
                                      {/* LOg0 */}
                 
                 <NavLink to='./QuoraBody' id='Quora'><img src={Quoraimg} alt='Logo'/></NavLink>
                </div>
                <div className="qHeader-icons">
                <div className="qHeader-icon">
                                      {/* ICons */}

                <NavLink to='./QuoraBody' className="Home-icon"><HomeIcon/></NavLink>
                </div>
                <div className="qHeader-icon">
                    <FeaturedPlayListOutlined/>
                </div>
                <div className="qHeader-icon">
            <AssignmentTurnedInOutlined/>
            </div>
          <div className="qHeader-icon">
            <PeopleAltOutlined/>
            </div>
          <div className="qHeader-icon">
            <NavLink to="./Notification" className="Notification-icon"><NotificationsOutlined/></NavLink>
            </div>
            </div>
            <div className="qHeader-input">
                <Search/>
            <input type='text' placeholder='Search'/>
            </div>

            <div className="Avator-img"><Avatar/></div>  
               
                <div className='Add-Ques'>
                       
                       <Button onClick={()=>setDisplayAddCreatQ(true)}>Add Question</Button>
                       
                </div> 
                          
           </div>          
       </div>
         { displayAddCreatQ && <AddCreatQ closeAddCreatQ={closeAddCreatQ}/>}
        
                              
    </>
  )
}
