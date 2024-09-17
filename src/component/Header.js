import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assest/logo.png"
import { FaCircleUser } from "react-icons/fa6";
 import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  const [showMenu,setShowMenu]=useState(false);

  const handlShowMenu=()=>
  {
    setShowMenu(preve=>!preve)
  }
  return (
    <header className="fixed z-50 w-full h-16 px-2 bg-white shadow-md md:px-4">
      {/* desktop */}
      <div className="flex items-center justify-between h-full">
        <Link to={""}>
          <div className="h-10">
            <img src={logo} className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:7">
          <nav className="flex gap-4 md:gap-6 md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>

          <div className="relative text-2xl text-slate-600">
            <FaCartShopping />

            <div className="absolute w-4 h-4 p-0 m-0 text-sm text-base text-center text-white bg-red-500 rounded-full -top-1 -right-1">
              0
            </div>
          </div>

          <div className="text-slate-600" onClick={handlShowMenu}>
            <div className="text-3xl cursor-pointer ">
              <FaCircleUser />
            </div>
            {showMenu && (
              <div className="absolute flex flex-col px-2 py-2 bg-white shadow right-2 drop-shadow-md">

                <Link
                  to={"newproduct"}
                  className="cursor-pointer whitespace-nowrap"
                >
                  New Product
                </Link>

                <Link to={"login"} className="cursor-pointer whitespace-nowrap">
                  Login
                </Link>
              </div>
            )}

            <div className=""></div>
          </div>
        </div>
      </div>

      {/* Mobile */}
    </header>
  );
}

export default Header
