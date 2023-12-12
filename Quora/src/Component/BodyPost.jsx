import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import GetAppIcon from '@mui/icons-material/GetApp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';
import './css/BodyPost.css'
import Post1 from './images/Post1.jpg'
import Post2 from './images/post2.webp'
import Post3 from './images/Post3.jpeg'



export default function BodyPost() {
  // const [comment,setComment]=useState(false)

  const Opencomment =()=>{
    setComment(!comment)
    
  }
      //  Use State for Vote UP And Down
  const [vote,setVote] = useState(25)
  const [unvote,setUnvote]= useState(10)

  const [activevote,setActivevote]= useState(false)
  const [unactivevote,setUnactivevote]= useState(false)

  function votef(){
    if(activevote){
      setActivevote(false)
      setVote(vote-1)
    }else{
      setActivevote(true)
      setVote(vote+1)
      if(unactivevote){
        setUnactivevote(false)
        setVote(vote+1)
        setUnvote(unvote-1)
      }
    }
  }

  function unvotef(){
    if(unactivevote){
      setUnactivevote(false)
      setUnvote(unvote-1)
    }else{
      setUnactivevote(true)
      setUnvote(unvote+1)
      if(activevote){
        setActivevote(false)
        setUnvote(unvote+1)
        setVote(vote-1)
      }
    }
  }

  return (
    <>

                                     {/* Main Div */}
      <div className='postContainer'>
        <div className='pHeader1'>
          <div className='pHeader2'>
        
        <Avatar></Avatar>
            <div className='ppn'>
              <div className='hName'>

                                        {/* Post1 */}
                 <div className='author'>Nagendrakarthik</div>
                 <div className='follow'>Follow</div>
              </div>
              <div className='designation'>Chief Executive Officer at SFC ALB (2020-present) <span className='time-span'>4h ago</span></div>
              </div>
            </div>
            
            <div className='clearicon'><ClearIcon/></div>
        </div>
        
        <p className='text'>“I think sleeping was my problem in school. If school had started at four in the afternoon, I'd be a college graduate today.”</p>
        <div ><img src={Post1} alt="post1" className='post-img' /></div>
       
        <div className='pfooter1'>
          <div className='pfooter2'>
          <div className='pReaction'>
            <div className='voteupvote'>
                 <div className='vote'> 
                 <button onClick={votef}>
                     <div><FileUploadIcon/></div>
                     <div>Upvote</div>
                     <div>{vote}</div>
                     </button>
                 </div>
                                       {/* use state downVote on click */}
                 <div className='downvote'><button onClick={unvotef}><GetAppIcon/>{unvote}</button></div>

            </div>
            <div  className='pFc'>
              <div ><ModeCommentIcon/></div>
              <div>455</div>
              </div>
            <div className='pFc'>
              <div><ShareIcon/></div>
            <div>90</div>
            </div>
          </div>
          </div>
          <div className='horisign'><MoreHorizIcon/></div>
        </div>
       
        <div className="border-bottom"></div>

                                           {/* Post2 */}
        <div className='pHeader1'>
          <div className='pHeader2'>
        
        <Avatar></Avatar>
            <div className='ppn'>
              <div className='hName'>
                 <div className='author'>Dr Tahrim Nisar</div>
                 <div className='follow'>Follow</div>
              </div>
              <div className='designation'>Mbbs MD Radiologist <span className='time-span'>16h ago</span></div>
              </div>
            </div>
            
            <div className='clearicon'><ClearIcon/></div>
        </div>
        
        <p className='text'>What are the health and environmental benefits of using filtered water in Texas, and how does it compare to unfiltered tap water in terms of safety and taste ?</p>
        <div ><img src={Post2} alt="post1" className='post-img' /></div>
       
        <div className='pfooter1'>
          <div className='pfooter2'>
          <div className='pReaction'>
            <div className='voteupvote'>
                 <div className='vote'> 
                 <button onClick={votef}>
                     <div><FileUploadIcon/></div>
                     <div>Upvote</div>
                     <div>{vote}</div>
                     </button>
                 </div>

                 <div className='downvote'><button onClick={unvotef}><GetAppIcon/>{unvote}</button></div>

            </div>
            <div  className='pFc'>
              <div ><ModeCommentIcon/></div>
              <div>3k</div>
              </div>
            <div className='pFc'>
              <div><ShareIcon/></div>
            <div>387</div>
            </div>
          </div>
          </div>
          <div className='horisign'><MoreHorizIcon/></div>
        </div>
       
        <div className="border-bottom"></div>

                                           {/* Post2 */}
                                            
        <div className='pHeader1'>
          <div className='pHeader2'>
        
        <Avatar></Avatar>
            <div className='ppn'>
              <div className='hName'>
                 <div className='author'>Sean Karnean</div>
                 <div className='follow'>Follow</div>
              </div>
              <div className='designation'>Professor Of Mathematics at Yale University <span className='time-span'>2y ago</span></div>
              </div>
            </div>
            
            <div className='clearicon'><ClearIcon/></div>
        </div>
        
        <p className='text'>Why do some intelligent people fail to achieve their potential?</p>
        <p>One of the smartest, perhaps the smartest person on the planet, Kim Ung-Yong, was doing calculus and speaking five languages before age five. By age eight he was doing math at NASA and finished his Ph.D. prior to age fifteen.</p>
        <div ><img src={Post3} alt="post1" className='post-img' /></div>
       
        <div className='pfooter1'>
          <div className='pfooter2'>
          <div className='pReaction'>
            <div className='voteupvote'>
                 <div className='vote'> 
                 <button onClick={votef}>
                     <div><FileUploadIcon/></div>
                     <div>Upvote</div>
                     <div>{vote}</div>
                     </button>
                 </div>

                 <div className='downvote'><button onClick={unvotef}><GetAppIcon/>{unvote}</button></div>

            </div>
            <div  className='pFc'>
              <div ><ModeCommentIcon/></div>
              <div>8k</div>
              </div>
            <div className='pFc'>
              <div><ShareIcon/></div>
            <div>455</div>
            </div>
          </div>
          </div>
          <div className='horisign'><MoreHorizIcon/></div>
        </div>
       
        <div className="border-bottom"></div>

      </div>
    </>
  )
}
