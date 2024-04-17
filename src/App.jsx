
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from './Page/Dashboard'
import Orderplacetool from './components/Orderplacetool';
import Home from './Page/home/Home';
import LoginPage from './Page/user/LoginPage';
import Login from './Page/user/Login';
import Register from './Page/user/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Policy from "./Page/Policy/Policy";
import "./App.css"
import Refound from "./Page/Policy/Refound";
import Terms from "./Page/Policy/Terms";
import Setting from "./Page/Setting"
import PaymentPage from "./Page/checkout/PaymentPage";
import AboutPage from "./Page/about/AboutPage";
import ContactPage from "./Page/contact/ContactPage";
import Blog from "./Page/blog/Blog";
import BlogSinglePage from "./Page/blog/BlogSinglePage";
import Feedback from "./Page/Feedback";
import Help from "./Page/Help";
import MyReferralPage from "./Page/MyReferralPage ";

import Profile from "./Page/Profile";

import Structuremarket from "./Page/Structuremarket";

import Scanner from "./Page/Scanner";
import Tradyportfolio from "./Page/Tradyportfolio";
import Tradymarket from "./Page/Tradymarket";
import { useContextApi } from "./components/context/UseContext";
import Accordition from "./Accordition";

function App() {

  const { theme, toggleTheme } = useContextApi()

  return (
    <>

      {/* <button
        className="bg-gray-700 px-3 py-1 rounded-sm text-white"
        onClick={toggleTheme}>Toggle Mode</button> */}
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/refound" element={<Refound />} />
        <Route path="/term" element={<Terms />} />
        <Route path='/home' element={<Home />} />
        <Route path="/checkout" element={<PaymentPage />} />
        
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogSinglePage" element={<BlogSinglePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/help" element={<Help />} />
        <Route path="/referral" element={<MyReferralPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<Orderplacetool />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/structure" element={<Structuremarket />} />
        <Route path="/portfolio" element={<Tradyportfolio />} />
        <Route path="/tradymarket" element={<Tradymarket />} />
        <Route path="/scaner" element={<Scanner />} />

        {/* <Route path="/market" element={<Marketplaybook />} /> */}

        <Route path="/acc" element={<Accordition />} />
        
      </Routes>



    </>
  );
}

export default App;
