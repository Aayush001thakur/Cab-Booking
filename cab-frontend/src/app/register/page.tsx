"use client"

import CONFIG from "../config/config"

import { useState, useContext } from "react"
import { useFormik } from "Formik"
import axios from "axios"
import Mycontext from "../Context/context"

import Link from "next/link"
import { SignUpSchema } from "../Validation"
import { useRouter } from "next/navigation";


const initalValue = {
    name: "",
    email: "",
    password: "",
    cpassword: ""
}

export default function Register() {
    const [isSubmiting, setIsSubmiting] = useState(false)

    const Router = useRouter()

    const myCont = useContext(Mycontext)

    const {
        setError
    } = myCont

    const { errors, touched, values, handleSubmit, handleChange, handleBlur, isValid } = useFormik({
        initialValues: initalValue,
        validationSchema: SignUpSchema,
        onSubmit: UserRegister
    })

    console.log(errors, touched)
    async function UserRegister(value: any, action: any) {
        setIsSubmiting(() => true)
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
        let reqOptions = {
            url: `${CONFIG.BACKEND.baseUrl}${CONFIG.BACKEND.register}`,
            method: "POST",
            headers: headersList,
            data: { name: values.name, email: values.email, password: values.password }
        }
        axios.request(reqOptions)
            .then(({ data }) => {
                action.resetForm()
                Router.push("/login")
                setError("success", data.message)
                setIsSubmiting(() => false)
            })
            .catch(({ response }) => {
                setError("error", response.data.message)
                setIsSubmiting(() => false)
            })

    }


    return (
        <div className="w-full h-screen">
            <div className="h-full w-full  flex flex-col md:flex-row">

                <div className="w-full  hidden md:block h-full  md:w-6/12 lg:w-8/12 bg-green-200">

                </div>

                <div className="h-full w-full md:w-6/12 lg:w-4/12 ">


                    <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
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
                            <form className="space-y-4" onSubmit={handleSubmit}>

                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input

                                            name="name"
                                            type="text"
                                            placeholder="Enter your name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={isSubmiting}

                                            required
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.name && touched.name && (<p className="font-medium text-red-400 ">{errors.name}</p>)}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"

                                            placeholder="Enter your email"
                                            required
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={isSubmiting}

                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.email && touched.email && (<p className="font-medium text-red-400 ">{errors.email}</p>)}

                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>

                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="Enter your password"

                                            required
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={isSubmiting}

                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.password && touched.password && (<p className="font-medium text-red-400 ">{errors.password}</p>)}

                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Confirm Password
                                        </label>

                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="cpassword"
                                            name="cpassword"
                                            type="password"
                                            placeholder="Confirm your password"

                                            required
                                            value={values.cpassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={isSubmiting}
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {errors.cpassword && touched.cpassword && (<p className="font-medium text-red-400 ">{errors.cpassword}</p>)}

                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className={`flex w-full justify-center rounded-md ${isSubmiting ? " bg-indigo-400 " : " bg-indigo-600 "} px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                    >
                                        {
                                            isSubmiting ? "Registering..." : "Register"
                                        }

                                    </button>
                                </div>
                            </form>

                            <p className="mt-6 text-center text-sm text-gray-500">
                                Already an account?{' '}
                                <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Login now
                                </Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}