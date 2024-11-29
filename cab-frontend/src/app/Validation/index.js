import * as Yup from "yup"

const  SignInSchema=Yup.object({
    email:Yup.string().min(5).required("please enter full email"),
    password:Yup.string().min(8,"password must be 8 or more character").max(15,"password must be 15 or less character").required("password is required!")
})

const SignUpSchema=Yup.object({
  name:Yup.string().required("please enter your name"),
  email:Yup.string().required("please enter your correct email"),
  password:Yup.string().min(8).max(15).required("enter password"),
  cpassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')

})

export {SignInSchema,SignUpSchema}