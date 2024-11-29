
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import AppError from './AppError'

import ContextProvider from "./Context/contextProvider"

import AuthContext from "./Context/Authentication/AuthProvider"


import StoreProvider from "./MyStates/stroreProvider.js"
const inter = Quicksand({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Cabshare',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">



      <body className={inter.className}>

        <ContextProvider>
          <AppError />
          <AuthContext>
            {children}
          </AuthContext>
        </ContextProvider>
      </body>
    </html>
  )
}
