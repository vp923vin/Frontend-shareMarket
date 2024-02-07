import React, {useState}from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Register = () => {


  const [showPassword, setShowPassword] = useState(false);
   
  const [showPasswordcurrent, setShowPasswordcurrent] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilitycurrent =()=>{
    setShowPasswordcurrent(!showPasswordcurrent)
  }
  return (
    <>

      <section class=" ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0 ">
          <a href="#" class="flex items-center mb-6 text-2xl font-semibold ">
            <img class="w-8 h-8 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRslyrkMmax5h05xWdNaph4EYq4w-HblCwQPh_Lh-rWOw&s" alt="logo" />
            Star
          </a>
          <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class=" text-[#2d333a] text-center  text-2xl md:text-3xl font-bold leading-tight tracking-tigh">
                Create and account
              </h1>
              <form class="space-y-4 md:space-y-6">
                <div>
                  <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                  <input type="text" name="email" id="email" class="border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required="" />
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                  <input type="email" name="email" id="email" class="border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
              
                  <div className='relative'>
                    <input   type={showPasswordcurrent ? 'text' : 'password'} name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />

                    <span
                      onClick={togglePasswordVisibilitycurrent}
                      className="absolute right-2 top-5 transform -translate-y-1/2 cursor-pointer"
                    >
                      {showPasswordcurrent ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
                <div>
                  <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>

                  <div className='relative'>
                    <input   type={showPassword ? 'text' : 'password'} name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />

                    <span
                      onClick={togglePasswordVisibility}
                      className="absolute right-2 top-5 transform -translate-y-1/2 cursor-pointer"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="terms" class="font-light ">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                  </div>
                </div>
                <button type="submit" class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                <p class="text-sm font-light  ">
                  Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Register