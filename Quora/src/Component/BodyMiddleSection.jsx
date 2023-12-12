import React from 'react'
import BodyQuestionSection from './BodyQuestionSection'
import BodyPost from './BodyPost'
import './css/BodyMiddleSection.css'
function BodyMiddleSection() {
  return (
    <div >
      <div>
      <BodyQuestionSection/>
      </div>
      <div>
      <BodyPost/>
      </div>
    </div>
  )
}

export default BodyMiddleSection
