import './App.css';
import SignUp from './pages/register';
import {
  BrowserRouter, Route, Routes, useNavigate
} from 'react-router-dom';
import HomePage from './Componennts/Home';
import SignInUser from './pages/login';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const isloggedIn = useSelector(state => state.isloggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    isloggedIn ? navigate("/") : navigate("/login")
    console.log("Hello");
  }, [isloggedIn])

  const [user, setLoginUser] = useState({})

  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element=
          {
            // user && user._id ? 
            <HomePage />
            // : <SignInUser setLoginUser={setLoginUser} />
          }
        />
        <Route path='/login' element={<SignInUser setLoginUser={setLoginUser} />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>


    </div>
  );
}

export default App;
