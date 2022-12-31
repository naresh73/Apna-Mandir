import './signin.css';
import { useState } from 'react';
import axios from 'axios';
import MailIcon from '../../Assests/images/mail.png';
import PadlockIcon from '../../Assests/images/padlock.png';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye';
import MandirLogoSection from '../../Componennts/MandirLogo';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function SignInUser({ setLoginUser }) {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })


  function togglePasswordVisibility() {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    }
    else {
      setIcon(eyeOff);
      setType('password');
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  async function Login() {
    try {
      const res = await axios.post("http://localhost:7009/login", user)
      if(res.data.user) {
        dispatch(login(res.data))
      }
      alert(res.data.message);
      setLoginUser(res.data.user)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="signin">
      {/* <MandirLogoSection /> */}
      <form className="signin-page">
        <h1>Sign In</h1>
        <p>Enter Username and password in order to sign in to your account</p>
        {console.log(user)}
        <div className="signin-field-email">
          <img src={MailIcon} width="20px" height="20px" alt="" />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="signin-input"
            placeholder="Enter mail" />
        </div>
        <div className="signin-field-password">
          <img src={PadlockIcon} width="20px" height="20px" alt="" />
          <input
            type={type}
            name="password"
            value={user.password}
            onChange={handleChange}
            className="signin-input"
            placeholder="Enter password" />
          <Icon onClick={togglePasswordVisibility} icon={icon} />
        </div>
        <span className='forgot-password'>Forgot Password?</span>
        <div>
          <div className='signin-button' onClick={Login}>Sign In</div>
        </div>
        
          <div className='signup-link-btn'>
            Don't Have an account ? <Link to="/register" className='signup-link' >Signup</Link>
          </div>
        
      </form>
    </div>
  )
}
