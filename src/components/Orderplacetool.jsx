import React from 'react'
import './Orderplace.css'

function Orderplacetool() {
  return (
    <>
    <section className="order_tool_first">
        <div className="container">
           
                <div className="row">
                <div className="col-6">
                <h3>Lot size</h3>
                <div className="row">
                    <div className="col-6">
                    <button className='btn_indx'>Index</button>
                    <button className='btn_date'>Expire Date</button>

                    </div>

                    <div className="col-6">
                    <button className='btn_indx'>Set Lot Size</button>
                    <button className='btn_date'>Expire Date</button>

                    </div>
                    </div>
                    </div>
                
                
                    <div className="col-6">

                    </div>
                    </div>
                </div>
            
       
        </section>
    </>
    
  )
}

export default Orderplacetool