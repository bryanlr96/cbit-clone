// layouts/Layout.tsx
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


import '../styles/icomoon.css'
import NavMovile from "./NavMovile";
import { useState } from "react";

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className="flex">
      <NavMovile mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
      <NavBar />
      <div className="w-[95%] lg:w-[80%] mx-auto flex flex-col">
        <Header setMobileOpen={setMobileOpen}/>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
