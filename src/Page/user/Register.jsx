import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Register = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCurrent, setShowPasswordCurrent] = useState(false);
  const [errors, setErrors] = useState({});
  const [userError, setErrormassage] = useState()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityCurrent = () => {
    setShowPasswordCurrent(!showPasswordCurrent);
  };

  const handleFormData = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!userName.trim()) {
      errors.userName = "This field is required";
    }

    if (!userEmail.trim()) {
      errors.userEmail = "This field is required";
    } else if (!/^\S+@\S+\.\S+$/.test(userEmail)) {
      errors.userEmail = "Invalid email address";

    }

    if (!userMobile.trim()) {
      errors.userMobile = "This field is required";
    }

    if (!userPassword.trim()) {
      errors.userPassword = "This field is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const payload = {
      'Username': userName,
      'Email': userEmail,
      'Password': userPassword,
      'Phone': userMobile,
    };

    try {
      const response = await axios.post('https://market.srninfotech.com/api/register', payload, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      setUserName("")
      setUserEmail("")
      setUserMobile("")
      setUserPassword("")
      setErrormassage("")

      console.log(response.data);
      toast.success("Register Successful")
      navigate("/login")
    } catch (error) {
      if (error.response.data.message) {
        setErrormassage(error.response.data.message)
      } else {
        setErrormassage("")
      }
      console.log(error, "___error")
    }
  };

  return (
    <>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0 ">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold ">
            <img className="w-8 h-8 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRslyrkMmax5h05xWdNaph4EYq4w-HblCwQPh_Lh-rWOw&s" alt="logo" />
            Star
          </a>
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="  text-center  text-2xl  font-medium leading-tight tracking-tigh">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="text" className="block mb-2 text-base font-medium  ">Your Name</label>
                  <input type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    name="email" id="email" className="border border-gray-900  sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required="" />
                  {errors.userName && <p className="text-red-500 text-xs">{errors.userName}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-base font-medium  ">Your Email</label>
                  <input
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    type='email'
                    required
                    className="border border-gray-900  sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                  {errors.userEmail && <p className="text-red-500 text-xs">{errors.userEmail}</p>}
                </div>
                <div>
                  <label htmlFor="mobile" className="block mb-2 text-base font-medium  ">Your Mobile</label>
                  <input
                    value={userMobile}
                    onChange={(e) => setUserMobile(e.target.value)}
                    type="number" name="mobile" id="" className="border border-gray-900  sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mobile number" required="" />
                  {errors.userMobile && <p className="text-red-500 text-xs">{errors.userMobile}</p>}
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-base font-medium  ">Password</label>

                  <div className='relative'>
                    <input
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                      type={showPasswordCurrent ? 'text' : 'password'} name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300  sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    {errors.userPassword && <p className="text-red-500 text-xs">{errors.userPassword}</p>}
                    <span
                      onClick={togglePasswordVisibilityCurrent}
                      className="absolute right-2 top-5 transform -translate-y-1/2 cursor-pointer"
                    >
                      {showPasswordCurrent ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div className="ml-3 text-base">
                    <label htmlFor="terms" className="font-light ">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                  </div>
                </div>
                <button
                  onClick={handleFormData}
                  type="submit" className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                {userError && <p className="text-red-500 text-base text-center">{userError}</p>}


                <p className="text-base text-center font-light  ">
                  Already have an account?
                   <Link to="/login" className="font-medium  underline text-blue-600 pl-1">Login here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register;
