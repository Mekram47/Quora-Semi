import React from 'react'
import './css/BodyRight.css'
// import './BodyRightCont'
import BodyRightCont from './BodyRightCont'

function BodyRight() {
  return (
    <div className='widget'>
      <div className="widget-header">
        <h5>Spaces to follow</h5>
      </div>
      <div className="widget-contents">
        <BodyRightCont/>
      </div>
    </div>
  )
}

export default BodyRight
