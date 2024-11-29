"use client"

import { useState, useContext } from "react"
import { useFormik } from "Formik"
import { useRouter } from "next/navigation";

import axios from "axios";

import CONFIG from "../config/config"
import Link from "next/link";

import { SignInSchema } from "../Validation"
import AppError from "../AppError";
import Mycontext from "../Context/context"


const intialValues = {
    email: "",
    password: ""
}

export default function Login() {

    const [isSubmiting, setIsSubmiting] = useState(false)

    const myCont = useContext(Mycontext)


    const {
        setError
    } = myCont

    const Router = useRouter()
    const { errors, touched, handleChange, values, handleSubmit, handleBlur } = useFormik({
        initialValues: intialValues,
        validationSchema: SignInSchema,
        onSubmit: LoginSubmit

    })
    console.log(errors, touched)



    async function LoginSubmit(value: any, action: any) {
        setIsSubmiting(() => true)


        let reqOptions = {
            url: `${CONFIG.BACKEND.baseUrl}${CONFIG.BACKEND.login}`,
            method: "POST",
            data: values,
        }
        axios.request(reqOptions).then(({data:result}) => {

            console.log(result);
            action.resetForm()
            // setAlertShow(true)
            localStorage.setItem("access-token",result.data.token)
            Router.replace("/dashboard")
            setError("success", "login successfully")
            setIsSubmiting(() => false)
        }).catch(({ response }) => {

            setError("error", response.data.message)
            setIsSubmiting(() => false)


        })


    }

    return (
        <div className="w-full flex flex-col md:flex-row h-screen">
            <div className="w-full md:w-2/4 lg:w-1/4   h-full">
                <div className="flex h-full flex flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit} method="post">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="abc@google.com"
                                        autoComplete="email"
                                        required
                                        onChange={handleChange}
                                        value={values.email}
                                        onBlur={handleBlur}
                                        disabled={isSubmiting}

                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {errors.email && touched.email && (<p className="text-sm font-medium  text-red-500">{errors.email}</p>)}
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <Link href="/forgot" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="********"
                                        autoComplete="current-password"
                                        required
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={isSubmiting}

                                        className="block w-full rounded-md border-0 px-3  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                    />
                                    {errors.password && touched.password && (<p className="text-sm font-medium  text-red-500">{errors.password}</p>)}
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmiting}
                                    className={`flex w-full justify-center rounded-md ${isSubmiting ? " bg-indigo-400 " : " bg-indigo-600 "} px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                >
                                    {isSubmiting ? "Logining..." : "Login"}
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Register now
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
            <div className="hidden md:block md:w-2/4 lg:w-3/4   bg-gray-200">

            </div>

        </div>


    )
}


