"use client"


import CONFIG from "../../config/config"

import React, { useState } from 'react'
import AuthContext from "./authContext"
import axios from "axios"


export default function AuthProvider({ children }) {
  const [User, setUser] = useState({})
  const [isProfile, setIsProfile] = useState(false)

  async function fetchProfile() {
    let headersList = {
      "Accept": "*/*",
      "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTYyZTU5ZjQxZmJjNTlmMzYzZGNkODgiLCJpYXQiOjE3MDc1NzczNjR9.4MEi7amKy35zrC3bWb2KGanGkKXS5Z8eC9DqnL-iv6A`
    }
    let reqOptions = {
      url: `${CONFIG.BACKEND.baseUrl}${CONFIG.BACKEND.getProfile}`,
      method: "GET",
      headers: headersList,
    }

    axios.request(reqOptions)
      .then(({ data: result }) => {
        console.log("fetched result in authProvider")
        console.log(result.data)
        setUser(() => result.data)
        setIsProfile(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  async function getMyProfile() {
    if (isProfile) return User;
    if (localStorage.getItem("access-token")) {
      console.log("fetched from backend")
      await fetchProfile()

      console.log(User)
      return User
    }

  }

  const Auth = {
    getMyProfile
  }
  return (
    <AuthContext.Provider value={Auth}>
      {children}
    </AuthContext.Provider>
  )
}
