import * as Yup from 'yup';

export const singupSchema = Yup.object({
    name : Yup.string().required("enter your name"),
    email : Yup.string().required("enter your email address").email(),
    password : Yup.string().min(8,"password is too short").max(20,"password is too long").required("enter your password"),
    confirm_password : Yup.string()
        .oneOf([Yup.ref('password'), null], "password didn't match").required("confirm your password")
})