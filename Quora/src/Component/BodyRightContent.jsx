import React from 'react'
import './css/BodyRight-Content.css'
import Mob from './images/Mobile.jpg'
import Quotes from './images/Quotes.jpg'


function BodyRightContent() {
  return (
    <div className="widget-contents">
    <div className="widget-content">
      <img
        src={Mob}
        alt="Mobile"
      />
      <div className="widget-contentTitle">
        <h5>Mobile App Programmer</h5>
        <p>The best Mobile App Development Company</p>
      </div>
    </div>
    <div className="widget-content">
      <img
                src={Quotes}

        alt="Quotes"
      />
      <div className="widget-contentTitle">
        <h5>Quotes of Quotes</h5>
        <p>Daily dosage of unforgettable lines from ...</p>
      </div>
    </div>
    <div className="widget-content">
      <img
                src={Artist}

        alt="Artist"
      />
       </div>
  </div>
  )
}

export default BodyRightContent
