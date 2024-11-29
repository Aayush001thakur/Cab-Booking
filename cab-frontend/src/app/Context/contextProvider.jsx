"use client"

import { useState } from "react"
import ErrorContext from "./context"




export default function ContextProvider({ children }) {

    const [errorType, setErrorType] = useState("success")
    const [errorMessage, setErrorMessage] = useState("success messsage")
    const [AlertShow, setAlertShow] = useState(false)

    function setError(erorrtype, message) {
        setAlertShow(true)
        setErrorType(erorrtype)
        setErrorMessage(message)
        setTimeout(() => {
            setAlertShow((prev) => false)
        }, 4000)
    }

    const errorHandler = {
        errorType: errorType,
        errorMessage: errorMessage,
        setError: setError,
        AlertShow,
        setAlertShow
    }
    return (
        <ErrorContext.Provider value={errorHandler}>
            {children}
        </ErrorContext.Provider>
    )
}
