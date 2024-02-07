

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Page/Dashboard'
import Orderplacetool from './components/Orderplacetool';
import Home from './Page/home/Home';
import LoginPage from './Page/user/LoginPage';
import Login from './Page/user/Login';
import Register from './Page/user/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/order" element={<Orderplacetool />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
