import React from 'react'

const Customd_rowpdown = ({ selectedoption, className, lotprise, lable, users, isOpen, toggleDropdown }) => {

    return (
        <div class={`${className}  text-center`}>

            {
                lable && (
                    <label
                        for="small"
                        class="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                        {lable}
                    </label>

                )
            }


            <div className=''>

                <select
                    id="small"
                    class=" p-1.5 mb-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                        <option className='py-3' selected> {selectedoption} </option>

                        {
                            users.map((item) => {
                                return (
                                    <option  className="py-2" value="US">{item}</option>
                                )
                            })
                        }
                    
                </select>


            </div>






            {lotprise && (
                <label
                    for="small"
                    class="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                    {lotprise}
                </label>

            )}


        </div>
    )
}

export default Customd_rowpdown