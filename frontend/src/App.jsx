import React from "react"
import Header from "./Components/Header/Header"
import { Outlet } from "react-router-dom"
import { BackgroundAnimation } from "./Components/Background/BgAnimationa"

export default function App() {
  return (
    <>
    <BackgroundAnimation/>
    <Header/>
    <Outlet/>
    </>
  )
}
