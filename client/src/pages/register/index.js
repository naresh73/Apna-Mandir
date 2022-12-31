import MandirLogoSection from '../../Componennts/MandirLogo';
import { useState } from 'react';
import './signup.css';
import MailIcon from '../../Assests/images/mail.png';
import PadlockIcon from '../../Assests/images/padlock.png';
import userIcon from '../../Assests/images/user.png';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function SignUp() {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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

  function register() {
    const {
      name, email, password, confirmPassword
    } = user;

    if (name && email && password && (password === confirmPassword)) {
      axios.post("http://localhost:7009/register", user)
        .then(res => console.log(res))
    }
    else {
      alert("invalid input")
    }
  }
  return (
    <div className='signup'>
      {/* <MandirLogoSection /> */}
      <div>
        <form className="signup-page">
          <h1>Sign Up</h1>
          <p className='heading'>create your account
          </p>
          {console.log(user)}
          <div className="signup-field-email">
            <img src={userIcon} width="20px" height="20px" alt="" />
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="signup-input"
              placeholder="Enter your name" />
          </div>
          <div className="signup-field-email">
            <img src={MailIcon} width="20px" height="20px" alt="" />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="signup-input"
              placeholder="Enter mail address" />
          </div>
          <div className="signup-field-password">
            <img src={PadlockIcon} width="20px" height="20px" alt="" />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="signup-input"
              placeholder="Enter password" />
          </div>
          <div className="signup-field-confirm-password">
            <img src={PadlockIcon} width="20px" height="20px" alt="" />
            <input
              type={type}
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              className="signup-input"
              placeholder="confirm password" />
            <Icon onClick={togglePasswordVisibility} icon={icon} />
          </div>
          <div>
            <div
              className='signup-button'
              onClick={register}
            >Sign Up</div>
          </div>

          <div className='login-link-btn'>
            Already Have an account ? <Link to="/login" className='login-link' >Login</Link>
          </div>


        </form>
      </div>
    </div>
  )
}
