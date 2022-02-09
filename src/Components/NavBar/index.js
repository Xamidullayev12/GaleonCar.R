import React from "react"
import { NavLink } from "react-router-dom"

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


    // className={
    //     "badge " +
    //     (this.state.value ? "badge-primary " : "badge-danger ") +
    //     " m-4"
    //   }
    // 



    return (
        <nav className="bg-gray-900 px-3">
            <section className="max-w-screen-xl mx-auto flex py-2 justify-between items-center">
                <div className="cursor-pointer">
                    <div className={styles.burger}>
                    </div>
                </div>
                <div className={splitLocation[1] === "" ? "text-amber-600" : ""}>
                    <div className="mr-4">
                        <NavLink to="/" exact>
                            <img src={logo} />
                        </NavLink>
                    </div>
                </div>
                <div className=" w-8/12">
                    <div className="py-2 flex justify-between">
                        <ul className="text-amber-200 lg:flex  items-center justify-between hidden">
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
                        <p className="text-amber-200 hover:text-amber-500 transition-all  xl:text-3xl lg:text-2xl sm:text-xl font-semibold">
                            <a href="tel:">
                                8 (995) 888-30-94
                            </a>
                        </p>

                        <div className=" flex mx-auto">
                            <button className="text-amber-200 hover:text-amber-500 mx-0.5 text-center sm:text-xl" onClick={() => handleClick('ru')}>Ru</button>
                            <button className="text-amber-200 hover:text-amber-500 mx-0.5 text-center sm:text-xl" onClick={() => handleClick('en')}>En</button>
                        </div>

                        <div className="flex">
                            <div className="">
                                <a href="">
                                    <div>
                                        <img src={appStore} width="200" alt="Download on the app store logo png" />
                                    </div>
                                </a>
                            </div>
                            <di>
                                <a href="">
                                    <div>
                                        <img src={googlePlay} width="200" alt="google play itunes png logo"/>
                                    </div>
                                </a>
                            </di>
                        </div>
                   </div>
                </div>
            </section>
        </nav>
    )
} 