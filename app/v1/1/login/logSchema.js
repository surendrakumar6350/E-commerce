import * as yup from "yup";


export const loginSchema = yup.object({
    email: yup.string().required("Email is required").email(),
    password: yup.string().required("Password is required").min(3)
})