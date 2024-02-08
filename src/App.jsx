

import { BrowserRouter, Routes, Route } from "react-router-dom";
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
function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/refound" element={<Refound />} />
          <Route path="/term" element={<Terms />} />
          <Route path='/home' element={<Home />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/order" element={<Orderplacetool />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
