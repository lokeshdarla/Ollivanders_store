import React from "react"
import Header from "./Components/Header/Header"
import { Outlet } from "react-router-dom"
import { BackgroundAnimation } from "./Components/Background/BgAnimationa"
import UserContextProvider from "./context/userContextProvider"

export default function App() {
  return (
    <>
    <UserContextProvider>
      <BackgroundAnimation/>
      <Header/>
      <Outlet/>
    </UserContextProvider>
    </>
  )
}
