import React from 'react'
import FilterForSpaces from './FilterForSpaces'
import './css/quorabodycontainer.css'
import BodyMiddleSection from './BodyMiddleSection'
import BodyRight from './BodyRight'
import './css/filterforspaces.css'
import './css/BodyRight.css'
import './css/bodyMiddleSection.css'
function QuoraBody() {
  return (
    <>
    <div className='quorabodycontainer'>
     <div className='filterforspaces'>
      <FilterForSpaces/>
      </div>
      <div className='bodyMiddleSection'>
      <BodyMiddleSection/>
      </div>
      <div className='BodyRight'>
      <BodyRight/>
      </div>
    </div>
    </>
  )
}

export default QuoraBody
