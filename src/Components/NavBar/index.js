import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

//      Css Import
import styles from "./NavBar.module.css" 

//      React Hooks
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

//      React Icons
import { FaFacebookSquare } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { FaTelegram } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"

//      Image Src
import logo from "../images/header/header-logo.png"
import appStore from "../images/header/appStore.png"
import googlePlay from "../images/header/googlePlay.png"

export default function NavBar() {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }

    const { t, i18n } = useTranslation();


    const [active, setMode] = useState(true)
    const ToggleMode = () => {
        setMode(!active);
    }

    return (
        <nav className="bg-[#0A0C11] px-3">
            <section className="max-w-screen-xl mx-auto flex py-2 justify-between items-center">
                <div className="cursor-pointer transition-all lg:hidden w-[10px] mr-6" onClick={ToggleMode}>
                    <div className={active ? styles.burger : styles.burger_active}>
                    </div>
                </div>
                <div className={splitLocation[1] === "" ? "text-[#EDC5A2]" : ""}>
                    <div className="mr-8 max-w-[286px]">
                        <NavLink to="/" exact>
                            <img className="w-full" src={logo} />
                        </NavLink>
                    </div>
                </div>
                <div className=" w-8/12">
                    <div className="py-2 flex justify-between">
                        <ul className={active ? "transition-all text-gray-300 lg:flex bg-[#0A0C11] items-center justify-between lg:relative lg:top-1 lg:left-2 absolute top-[116px] left-[-100%] z-10 lg:p-0 p-5 md:pb-8 pb-36 pt-6 " : "transition-all text-white lg:flex bg-[#0A0C11] items-center justify-between lg:relative lg:top-1 lg:left-2 absolute top-[116px] left-[0px] z-10 lg:p-0 p-5 md:pb-8 pb-36 pt-6 "}>
                            <li className={splitLocation[1] === "" ? "text-[#EDC5A2]" : ""}>
                                <NavLink to="/" exact>
                                    <div className="hover:text-amber-500 lg:mr-1 mr-0 lg:ml-0  ml-2">
                                        <span>{ t ('navbar.main')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={splitLocation[1] === "carParc" ? "text-[#EDC5A2]" : ""}>
                                <NavLink to="/carParc" exact>
                                    <div className="hover:text-amber-500 mx-2">
                                        <span>{ t ('navbar.carParc')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={splitLocation[1] === "rent" ? "text-[#EDC5A2]" : ""}>
                                <NavLink to="/rent" exact>
                                    <div  className="hover:text-amber-500 mx-2">
                                        <span>{ t ('navbar.rent')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={splitLocation[1] === "forBusiness" ? "text-[#EDC5A2]" : ""}>
                                <NavLink to="/forBusiness" exact>
                                    <div className="hover:text-amber-500 mx-2">
                                        <span>{ t ('navbar.forBusiness')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={splitLocation[1] === "contact" ? "text-[#EDC5A2]" : ""}>
                                <NavLink to="/contact" exact>
                                    <div className="hover:text-amber-500 mx-2">
                                        <span>{ t ('navbar.contact')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={splitLocation[1] === "prsonalArea" ? "text-[#EDC5A2]" : ""}>
                                <NavLink to="/personalArea">
                                        <div className="hover:text-amber-500 ml-2">
                                            <span>{ t ('navbar.personalArea')}</span>
                                        </div>
                                </NavLink>
                            </li>
                        </ul>

                        <div className="flex items-center lg:m-0 mx-auto">
                            <div className="p-1 m-0.5 hover:outline transition-all rounded-md hover:outline-amber-600 ">
                                <a href="">
                                    <FaFacebookSquare className="text-white hover:text-gray-400 transition-all" size={18} />
                                </a>
                                </div>
                            <div className="p-1 m-0.5 hover:outline transition-all rounded-md hover:outline-amber-600 ">
                                <a href="">
                                    <BsInstagram className="text-white hover:text-gray-400 transition-all" size={18}/>
                                </a>
                                </div>
                            <div className="p-1 m-0.5 hover:outline transition-all rounded-md hover:outline-amber-600 ">
                                <a href="">
                                    <FaTelegram className="text-white hover:text-gray-400 transition-all" size={18}/>
                                </a>
                                </div>
                            <div className="p-1 m-0.5 hover:outline transition-all rounded-md hover:outline-amber-600 ">
                                <a href="">
                                    <IoLogoWhatsapp className="text-white hover:text-gray-400 transition-all" size={18}/>
                                </a>
                                </div>
                        </div>  
                    </div>

                    <p className="w-full bg-gray-600 h-0.5"></p>

                   <div className="flex items-center justify-between">
                        <p className="md:w-[250px] py-4 text-[#EDC5A2] hover:text-amber-500 transition-all  xl:text-3xl lg:text-2xl ml:text-xl text-sm font-semibold">
                            <a className=" w-[200px]" href="tel:">
                                8 (995) 888-30-94
                            </a>
                        </p>

                        <div className={active ? "lg:relative lg:top-0 lg:left-0 absolute top-[17.7rem] left-[-100%] z-10 flex mx-auto bg-[#0A0C11] transition-all" : "transition-all lg:relative lg:top-0 lg:left-0 absolute top-[17.7rem] left-14 z-10 flex mx-auto bg-[#0A0C11]"}>
                            <button className="text-[#EDC5A2] hover:text-amber-500 mx-0.5 text-center lg:text-xl bordr-l-2 border-white" onClick={() => handleClick('ru')}>Ru</button>
                            <button className="text-[#EDC5A2] hover:text-amber-500 mx-0.5 text-center lg:text-xl" onClick={() => handleClick('en')}>En</button>
                        </div>

                        <div className={active ? "transition-all md:flex md:relative md:top-1 md:left-0 absolute top-[312px] left-[-100%] z-10" : "transition-all md:flex md:relative md:top-1 md:left-0 absolute top-[312px] left-5 z-10"}>
                            <div className="border rounded-lg">
                                <a href="">
                                    <div>
                                        <img className="md:w-[148px] w-[130px]" src={appStore} alt="Download on the app store logo png" />
                                    </div>
                                </a>
                            </div>
                            <div className="md:ml-3 border rounded-lg ">
                                <a href="">
                                    <div className="">
                                        <img className="md:w-[148px] w-[130px]" src={googlePlay} alt="google play itunes png logo"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                   </div>
                </div>
            </section>
        </nav>
    )
} 