
import React from 'react'
import { Link } from 'react-router-dom';
import "../Page/market.css";

function Tradymarket() {
  return (
    <>
      <div className=''>
        <section className="markket">
          <h4 className='trade_head'> Trade Diary</h4>
          <div className="container">
            <div className="flex justify-between items-center">
              <div className='flex gap-2 items-center text-base'>
                <Link to='#' className="bg-blue-900 text-gray-50 font-semibold py-2 px-3 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Market Playbook</Link>

                <Link to='#' className="bg-blue-900 text-gray-50 font-semibold py-2 px-3 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">My Portfolio Tracker</Link>

              </div>

              <div className='flex items-center gap-3 '>
                <Link
                  to="/dashboard"
                  className="bg-blue-900 h-9 rounded text-sm flex items-center px-3 text-white   "
                >
                  Home
                </Link>
                <img className='market_profile' src="public/images/profilee.png" alt="profile" />
              </div>
            </div>
          </div>
        </section>

        {/* second section */}
        <section className="market_book mt-4">
          <div className="container">
            <div className="row">



              <div className="col-lg-12 col-md-12 col-12 table_for ">
                {/* <Table style={{ borderCollapse: 'collapse', width: '100%' }}>
    <colgroup>
      <col style={{ width: '5%' }} /> 
      <col style={{ width: '5%' }} />
   
    </colgroup>
    <thead>
      <tr className=''>
        <th className=''>Date</th>
        <th className=''>Stock</th>
        <th className=''>LTP</th>
        <th className=''>Long/Short</th>
        <th className=''>Entry Price</th>
        <th className=''>SL</th>
        <th className=''>Quantity</th>
        <th className=''>Target 1</th>
        <th className=''>Target 2</th>
        <th className=''>Holding period (intrady,swing)Positional</th>
        <th className=''>Notes (For tags)</th>
        <th className=''>Exit Price</th>
        <th className=''>Add to portfolio(Button)</th>
      </tr>
    </thead>
    <tbody>
      <tr className=' tr_color'>
        <td className=''>1</td>
        <td className=''>name</td>
        <td className=''>data</td>
        <td className=''>data</td>
        <td className=''>data</td>
        <td className=''>data</td>
        <td className=''>data</td>
        <td className=''>data</td>
        <td className=''>data</td>
        <td className=''>data</td>
        <td className=''>data</td>
        <td className=''>data</td>
        <td className=''>data</td>
       
      </tr>
    </tbody>
  </Table> */}

                <div className="overflow-x-auto">
                  <table className="border-collapse border w-full">
                    <thead className=' bg-blue-300 text-sm'>
                      <tr className="">
                        <th className="">Date</th>
                        <th className="">Stock</th>
                        <th className="">Sector</th>
                        <th className="">LTP</th>
                        <th className="">Long/Short</th>
                        <th className="">Entry Price</th>
                        <th className="">SL</th>
                        <th className="">Quantity</th>
                        <th className="">Target 1</th>
                        <th className="">Target 2</th>
                        <th className="">Holding period</th>
                        <th className="">Notes</th>
                        <th className="">Exit Price</th>
                        <th className="">Add to Portfolio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table_row">
                        <td className="">
                          <input type="date" className=" bg-gray-100 border rounded py-1 px-2 w-full focus:outline-none focus:shadow-outline" />
                        </td>
                        <td className="">
                          <input type="text" className="  bg-gray-100 border rounded py-1 px-2 w-full focus:outline-none focus:shadow-outline" />
                        </td>
                        <td className="">
                          <input type="text" className="  bg-gray-100 border rounded py-1 px-2 w-full focus:outline-none focus:shadow-outline" />
                        </td>
                        <td className="">
                          <input type="number" step="0.01" className="bg-gray-100 border rounded py-1 px-2 w-full focus:outline-none focus:shadow-outline" />
                        </td>
                        <td className="">
                          <select className="  bg-gray-100 border rounded py-1.5 px-2 w-full focus:outline-none focus:shadow-outline">
                            <option>Long</option>
                            <option>Short</option>
                          </select>
                        </td>
                        <td className="">
                          <input type="number" step="0.01" className="  bg-gray-100 border rounded py-1 px-2 w-full focus:outline-none focus:shadow-outline" />
                        </td>
                        <td className="">
                          <input type="number" step="0.01" className="  bg-gray-100 border rounded py-1 px-2 w-full focus:outline-none focus:shadow-outline" />
                        </td>
                        <td className="">
                          <input type="number" className="  bg-gray-100 border rounded py-1 px-2 w-full focus:outline-none focus:shadow-outline" />
                        </td>
                        <td className="">
                          <input type="number" step="0.01" className=" bg-gray-100 border rounded py-1 px-2 w-full focus:outline-none focus:shadow-outline" />
                        </td>
                        <td className="">
                          <input type="number" step="0.01" className="  bg-gray-100 border rounded py-1 px-2 w-full focus:outline-none focus:shadow-outline" />
                        </td>
                        <td className="">
                          <select className="  bg-gray-100 border rounded py-1.5 px-2 w-full focus:outline-none focus:shadow-outline">
                            <option>Intraday</option>
                            <option>Swing</option>
                            <option>Positional</option>
                          </select>
                        </td>
                        <td className="">
                          <input type="text" className="bg-gray-100 border rounded py-1 px-2 w-full focus:outline-none focus:shadow-outline" />
                        </td>
                        <td className="">
                          <input type="number" step="0.01" className="  bg-gray-100 border rounded py-1 px-2 w-full focus:outline-none focus:shadow-outline" />
                        </td>
                        <td className="">
                          <button className="bg-blue-900 text-gray-50 font-semibold py-1 px-3 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>


            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Tradymarket;