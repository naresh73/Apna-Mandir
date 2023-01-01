import React from 'react';
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
import { useFormik } from 'formik';
import { singupSchema } from './signup.schema';


export default function Signup() {

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const navigate = useNavigate();

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

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: singupSchema,
        onSubmit: async (values, action) => {
            try {
                const res = await axios.post("http://localhost:7009/register", values)
                alert(res.data.message)
                if (res.data.registered) {
                    action.resetForm()
                    navigate("/login")
                }

            } catch (error) {
                console.log(error);
            }
        }

    })
    return (
        <div className='signup'>
            <MandirLogoSection />
            <div>
                <form className="signup-page">
                    <h1>Sign Up</h1>
                    <p className='heading'>create your account
                    </p>
                    <div className="signup-field-email">
                        <img src={userIcon} width="20px" height="20px" alt="" />
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className="signup-input"
                            placeholder="Enter your name" />
                        {errors.name && touched.name ? <p className="form-error">{errors.name}</p> : null}
                    </div>
                    <div className="signup-field-email">
                        <img src={MailIcon} width="20px" height="20px" alt="" />
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className="signup-input"
                            placeholder="Enter mail address" />
                        {errors.email && touched.email ? <p className="form-error">{errors.email}</p> : null}
                    </div>
                    <div className="signup-field-password">
                        <img src={PadlockIcon} width="20px" height="20px" alt="" />
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className="signup-input"
                            placeholder="Enter password" />
                        {errors.password && touched.password ? <p className="form-error password">{errors.password}</p> : null}
                    </div>
                    <div className="signup-field-confirm-password">
                        <img src={PadlockIcon} width="20px" height="20px" alt="" />
                        <input
                            type={type}
                            name="confirm_password"
                            value={values.confirm_password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className="signup-input"
                            placeholder="confirm password" />
                        <Icon onClick={togglePasswordVisibility} icon={icon} />
                        {errors.confirm_password && touched.confirm_password ? <p className="form-error password">{errors.confirm_password}</p> : null}
                    </div>
                    <div>
                        <button
                            className='signup-button'
                            onClick={handleSubmit}
                            type="submit"
                        >Sign Up</button>
                    </div>
                    <div className='login-link-btn'>
                        Already Have an account ? <Link to="/login" className='login-link' >Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
