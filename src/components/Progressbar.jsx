import React from 'react'
import '../components/progressbar.css'

function Progressbar() {
  return (

    <div className="progresbar_div">
      <div className="progress-container">

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '50%' }}>Progress 1</div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '60%' }}>Progress 2</div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '80%' }}>Progress 3</div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '70%' }}>Progress 4</div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '90%' }}>Progress 4</div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '100%' }}>Progress 4</div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '90%' }}>Progress 4</div>
        </div>

      </div>
    </div>
  )
}

export default Progressbar