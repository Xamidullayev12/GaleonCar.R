import React from "react";
import { NavLink } from "react-router-dom"

import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

//      Image Imprts
import logo from "../images/footer/logo.png"

//      Icon Imports
import { FaFacebookSquare } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { FaTelegram } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"


export default function Footer() {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }

    const { t, i18n } = useTranslation();



    return (
        <footer className="bg-gray-900 py-4">
            <div className="max-w-screen-md mx-auto ">
                <div className="py-2">
                    <img className="w-42 mx-auto" src={logo} />
                </div>
                <ul className="text-amber-200 md:flex  items-center justify-between hidden px-6">
                    <li className={splitLocation[1] === "" ? "text-amber-700" : ""}>
                        <NavLink to="/" exact>
                            <div className="hover:text-amber-500 mr-1">
                                <span>{ t ('navbar.main')}</span>
                            </div>
                        </NavLink>
                    </li>
                    <li className={splitLocation[1] === "carParc" ? "text-amber-700" : ""}>
                        <NavLink to="/carParc" exact>
                            <div className="hover:text-amber-500 mx-2">
                                <span>{ t ('navbar.carParc')}</span>
                            </div>
                        </NavLink>
                    </li>
                    <li className={splitLocation[1] === "rent" ? "text-amber-700" : ""}>
                        <NavLink to="/rent" exact>
                            <div  className="hover:text-amber-500 mx-2">
                                <span>{ t ('navbar.rent')}</span>
                            </div>
                        </NavLink>
                    </li>
                    <li className={splitLocation[1] === "forBusiness" ? "text-amber-700" : ""}>
                        <NavLink to="/forBusiness" exact>
                            <div className="hover:text-amber-500 mx-2">
                                <span>{ t ('navbar.forBusiness')}</span>
                            </div>
                        </NavLink>
                    </li>
                    <li className={splitLocation[1] === "contact" ? "text-amber-700" : ""}>
                        <NavLink to="contact" exact>
                            <div className="hover:text-amber-500 mx-2">
                                <span>{ t ('navbar.contact')}</span>
                            </div>
                        </NavLink>
                    </li>
                    <li className={splitLocation[1] === "prsonalArea" ? "text-amber-700" : ""}>
                        <NavLink to="prsonalArea">
                            <div className="hover:text-amber-500 ml-2">
                                <span>{ t ('navbar.personalArea')}</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="text-center flex items-center md:pt-8">
                <p className="h-0.5 bg-gray-600 w-full"></p>
                <p className="text-gray-300 w-42 px-4">2022 
                    <span className="px-2">©</span> 
                    <span className="text-bold">GALEONCAR</span>
                </p>
                <p className="h-0.5 bg-gray-600 w-full"></p>
            </div>
            <p className="text-center text-gray-300 py-2">Политика конфиденциальности</p>
            <div className="flex items-center max-w-screen-md justify-center mx-auto">
                <div className="p-1 m-0.5 hover:outline transition-all rounded-md hover:outline-amber-600 mx-1">
                    <a href="">
                        <FaFacebookSquare className="text-white hover:text-gray-400 transition-all" size={18} />
                    </a>
                </div>
                <div className="p-1 m-0.5 hover:outline transition-all rounded-md hover:outline-amber-600 mx-1">
                    <a href="">
                        <BsInstagram className="text-white hover:text-gray-400 transition-all" size={18}/>
                    </a>
                </div>
                <div className="p-1 m-0.5 hover:outline transition-all rounded-md hover:outline-amber-600 mx-1">
                    <a href="">
                        <FaTelegram className="text-white hover:text-gray-400 transition-all" size={18}/>
                    </a>
                </div>
                <div className="p-1 m-0.5 hover:outline transition-all rounded-md hover:outline-amber-600 mx-1">
                    <a href="">
                        <IoLogoWhatsapp className="text-white hover:text-gray-400 transition-all" size={18}/>
                    </a>
                </div>
            </div>  
        </footer>
    )
}