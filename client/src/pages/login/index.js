import "./login.css";
import { useFormik } from "formik";
import MailIcon from '../../Assests/images/mail.png';
import PadlockIcon from '../../Assests/images/padlock.png';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye';
import MandirLogoSection from '../../Componennts/MandirLogo';
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginSchema } from "./login.schema";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

export default function Login() {
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const dispatch = useDispatch()

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

    const initialValue = {
        email: "",
        password: ""
    }

    const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: initialValue,
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            try {
                const res = await axios.post("http://localhost:7009/login", values)
                if (res.data.user) {
                    dispatch(login(res.data))
                }
                alert(res.data.message);
                // setLoginUser(res.data.user)
            } catch (error) {
                console.log(error);
            }
        }
    })
    
    return (
        <div className="signin">
            <MandirLogoSection />
            <form className="signin-page" >
                <h1>Sign In</h1>
                <p>Enter Username and password in order to sign in to your account</p>
                <div className="signin-field-email">
                    <img src={MailIcon} width="20px" height="20px" alt="" />
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="signin-input"
                        placeholder="Enter mail" />
                    {
                        errors.email && touched.email ? (<p className="form-error">{errors.email}</p>) : null
                    }
                </div>
                <div className="signin-field-password">
                    <img src={PadlockIcon} width="20px" height="20px" alt="" />
                    <input
                        type={type}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="signin-input"
                        placeholder="Enter password" />
                    <Icon onClick={togglePasswordVisibility} icon={icon} />
                    {
                        errors.password && touched.password ? (<p className="form-error password">{errors.password}</p>) : null
                    }
                </div>
                <span className='forgot-password'>Forgot Password?</span>
                <div>
                    <div className='signin-button' type="submit" onClick={handleSubmit} >Sign In</div>
                </div>

                <div className='signup-link-btn'>
                    Don't Have an account ? <Link to="/register" className='signup-link' >Signup</Link>
                </div>

            </form>
        </div>
    )
}
