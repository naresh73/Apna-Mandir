import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string().required("enter your email address"),
    password: Yup.string().required("enter your password")
})