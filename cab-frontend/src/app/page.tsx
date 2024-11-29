"use client"

import AppError from './AppError'

import { useState } from "react"
import Mycontext from "./Context/context"

import Cover from "./home/cover"
export default function Home() {

  return (
    <>

      <div className="">
        <Cover />
      </div>
    </>

  )
}