import { Avatar } from '@mui/material'
import React,{useState} from 'react'
import AddCreatQ from './AddCreatQ'
import QuizIcon from '@mui/icons-material/Quiz';
import CreateIcon from '@mui/icons-material/CreateOutlined';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import './css/BodyQuestionSection.css'

function BodyQuestionSection() {
  //usestate hook for displaying question and answer model popup on click button
  const [displayAddCreatQ,setDisplayAddCreatQ] = useState(false);
  // const openAddCreatQ =()=> displayAddCreatQ;
  const closeAddCreatQ = ()=> setDisplayAddCreatQ(false);
  return (
    <div>
      <div className='bodyQuestionSectionContainer'>
        <div className='bodyQS1'>
          <Avatar></Avatar>
          <div className='qbutton'>
          <button onClick={()=> setDisplayAddCreatQ(true)}>What do you want to ask or share?</button>
          </div>
          </div>
        <div className='bodyQFooter'>
          <div className='Reaction'><div><QuizIcon/></div><div>Ask</div></div>
          <div className='Reaction'><div><QuickreplyIcon/></div><div>Answer</div></div>
          <div className='Reaction'><div><CreateIcon/></div><div>Post</div></div>
        </div>
      </div>
      {displayAddCreatQ && <AddCreatQ closeAddCreatQ={closeAddCreatQ}/>}
    </div>
  )
}

export default BodyQuestionSection
