import './App.css';
import {
  BrowserRouter, Route, Routes, useNavigate
} from 'react-router-dom';
import HomePage from './Componennts/Home';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {

  const isloggedIn = useSelector(state => state.isloggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    isloggedIn ? navigate("/") : navigate("/login")
  }, [isloggedIn])

  const [user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element=
          {
            // user && user._id ? 
            <HomePage />
            // : <Login setLoginUser={setLoginUser} />
          }
        />
        {/* <Route path='/login' element={<SignInUser setLoginUser={setLoginUser} />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
