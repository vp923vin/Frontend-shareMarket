
import React from 'react'
import Table from 'react-bootstrap/Table';
import "../Page/market.css";

function Tradymarket() {
  return (
    <>
<div className='back_colour'>
<section className="markket">
 <h4 className='trade_head'> Trade Diary</h4>
    <div className="container">
        <div className="row col-12">
          <div className='col-lg-6 col-md-6 col-6'>
          <button className='mrkt_btn'>Market Playbook</button>
         
          <button className='myfolio_btn'>My Portfolio Tracker</button>

   
          </div>
          {/* <div className='col-lg-4 col-md-4 col-4'>
          <button className='myfolio_btn'>My Portfolio Tracker</button>

          </div> */}
          <div className='col-lg-6 col-md-6 col-6'>
        <img className='market_profile' src="public/images/profilee.png" alt="profile" />
          </div>
        </div>
    </div>
</section>

{/* second section */}
<section className="market_book">
    <div className="container">
        <div className="row">
           


<div className="col-lg-12 col-md-12 col-12 table_for">
  <Table style={{ borderCollapse: 'collapse', width: '100%' }}>
    <colgroup>
      <col style={{ width: '5%' }} /> 
      <col style={{ width: '5%' }} />
   
    </colgroup>
    <thead>
      <tr className='table_row'>
        <th className='th_border_red'>Date</th>
        <th className='th_border_red'>Stock</th>
        <th className='th_border'>LTP</th>
        <th className='th_border_red'>Long/Short</th>
        <th className='th_border_red'>Entry Price</th>
        <th className='th_border'>SL</th>
        <th className='th_border_red'>Quantity</th>
        <th className='th_border'>Target 1</th>
        <th className='th_border'>Target 2</th>
        <th className='th_border'>Holding period (intrady,swing)Positional</th>
        <th className='th_border'>Notes (For tags)</th>
        <th className='th_border_red'>Exit Price</th>
        <th className='th_border_red'>Add to portfolio(Button)</th>
      </tr>
    </thead>
    <tbody>
      <tr className=' tr_color'>
        <td className='th_border'>1</td>
        <td className='th_border'>name</td>
        <td className='th_border'>data</td>
        <td className='th_border'>data</td>
        <td className='th_border'>data</td>
        <td className='th_border'>data</td>
        <td className='th_border'>data</td>
        <td className='th_border'>data</td>
        <td className='th_border'>data</td>
        <td className='th_border'>data</td>
        <td className='th_border'>data</td>
        <td className='th_border'>data</td>
        <td className='th_border'>data</td>
       
      </tr>
    </tbody>
  </Table>
</div>


        </div>
    </div>
</section>
</div>

    </>
  )
}

export default Tradymarket;