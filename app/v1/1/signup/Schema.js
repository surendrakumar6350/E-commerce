import * as yup from "yup";


export const signupSchema = yup.object({
    username: yup.string().required("Username is required").min(3),
    email: yup.string().required("Email is required").email(),
    password: yup.string().required("Password is required").min(3),
    config: yup.string().required("Confirm password is required").oneOf([yup.ref("password"),null], "password must be matched")
})