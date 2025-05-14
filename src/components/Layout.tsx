// layouts/Layout.tsx
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


import '../styles/icomoon.css'

export default function Layout() {
  return (
    <div className="flex">
      <NavBar />
      <div className="w-[95%] lg:w-[80%] mx-auto flex flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
