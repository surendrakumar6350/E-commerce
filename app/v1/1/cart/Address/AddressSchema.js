import * as yup from "yup";


export const AddressSchema = yup.object({
    firstName: yup.string().required("First Name is required").min(3),
    secondName: yup.string().required("Last Name is required").min(3),
    number: yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
    email: yup.string().required("Email is required").email(),
    street: yup.string().required("Address is required").min(3),
    state: yup.string().required("State is required").min(3)
})