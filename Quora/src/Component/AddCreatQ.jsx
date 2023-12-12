import React,{useEffect, useState}  from 'react'
import './css/AddCreatQ.css'
import CloseIcon from '@mui/icons-material/Close';
import { Avatar} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import GroupIcon from '@mui/icons-material/Group';

function AddCreatQ({closeAddCreatQ}) {

// this is a hook for display post component or answer component
  const [displayCPmodal,setDisplayCPmodal]=useState(true);

  //using usseffect For Blur
  useEffect(()=>{
    document.body.style.overflow='hidden';
    return ()=>{
      document.body.style.overflow= 'scroll';
    };
  },[]);
  return (
    <>
    <div onClick={closeAddCreatQ} className='back-ref'></div>
    <div className='Main-container'>
      <div className="Sub-container">
     {displayCPmodal?
               <div onClick={closeAddCreatQ}><CloseIcon/></div>:
               <div className=''>
               
              </div> }
               <div className='Buttons'>
                      <div id='Add-Ques'><button onClick={()=>setDisplayCPmodal(true)}>Add Question</button></div>
                      <div id='Creat-Post'><button onClick={()=>setDisplayCPmodal(false)}>Create Post</button></div>        
               </div>
               <div className='bottom-container-border'>
               {displayCPmodal?
               <div className='Underline'></div>:
              
               <div className='bbottom_border'></div>}
               </div>
              {displayCPmodal? <div className='info'>
                        <h4>Tips on getting good answer quickly</h4>
                        <ul>
                              <li>Make sure your question has not been asked already</li>
                              <li>Keep your question short and to the point</li>
                              <li>Double-check grammar and spelling</li>
                              </ul>      
               </div>:null
}
              { displayCPmodal? <div className='Public-icon'>
                              <div className='avatar svg-icon'><Avatar/></div>
                            
                              <div>
                                     <button><GroupIcon/><sup>Public</sup></button>        
                              </div>
               </div>:
                <div className='Public-icon'>
                  <h1 className='Create-line'>Share Your Post here Feel Free</h1>
               
 </div>}
 {displayCPmodal?
               <div className='textarea'><textarea name="" id="" ></textarea></div>:
               <div className='textarea1'><textarea name="" id="" ></textarea></div>}
               <div className='Below-btn-sec'>
                              <div><button className='Cancelbtn' onClick={closeAddCreatQ}>Cancel</button></div>
                              {displayCPmodal? 
                              <div><button className='AddButton'>Add Question</button></div>:
                              <div><button className='AddButton'>Post</button></div>}
               </div>
      </div>
      </div>
      
      
    </>
  )
}

export default AddCreatQ




