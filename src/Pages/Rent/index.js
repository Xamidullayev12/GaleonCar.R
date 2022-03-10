import React from "react"
import SimpleAccordion from "../../Components/Accordion"


import question from "../../Components/images/main/question.png"
import questionShadow from "../../Components/images/main/questionShadow.png" 



import { BsWindowDock } from "react-icons/bs"
import { FaRegUser } from "react-icons/fa"
import { BiTimeFive } from "react-icons/bi"
import { IoIosTimer } from "react-icons/io"
import { FaWallet } from "react-icons/fa"
import { FaHandshake } from "react-icons/fa"




export default function  Rent() {
    return (
        <div className="bg-gray-900 ">
            <div className="w-full" style={{background: `url(${question})`, backgroundRepeat: "no-repeat"}} >
                <div className="w-full pb-24" style={{background: `url(${questionShadow})`, backgroundRepeat: "no-repeat"}}>
                    <div className="max-w-screen-xl mx-auto lg:px-5 md:py-4">
                        <div className=" text-center pt-20">
                            <p className="text-gray-300">УСЛОВИЯ</p>
                            <h1 className="font-bold text-xl text-[#EDC5A2] md:text-3xl mt-2">АРЕНДЫ</h1>
                        </div>
                        <div className="mt-10 lg:flex justify-between">
                            <div className="max-w-screen-sm lg:mx-0 mx-auto lg:mb-0 mb-10">
                                <SimpleAccordion />
                            </div>
                            <div className="p-3 relative bg-gray-900 lg:h-[554px] lg:w-[314px]">
                                <div className="grid lg:absolute lg:top-[-24px] lg:left-5 lg:grid-cols-1 sm:grid-cols-3 ml:grid-cols-2 md:p-8 border border-[#EDC5A2] lg:w-[314px] lg:h-[600px]">
                                    <div className="text-white w-48 py-3 flex  w-56 px-2">
                                        <span><BsWindowDock className="font-bold" size={20}/></span>
                                        <div className="items-center ml-3">
                                            <span className="font-bold">Документы</span>
                                            <p className="mt-2 leading-5 text-sm">Паспорт и водительское удостоверение</p>
                                        </div>
                                    </div>
                                    <div className="text-white w-48 flex py-3 px-4 lg:border-0 ml:border-l">
                                        <span><FaRegUser className="font-bold" size={20}/></span>
                                        <div className="items-center ml-3">
                                            <span className="font-bold">Возраст</span>
                                            <p className="mt-2 leading-5 text-sm">от 21 года</p>
                                        </div>
                                    </div>
                                    <div className="text-white w-48 flex py-3 px-3 lg:border-0 sm:border-l">
                                        <span><BiTimeFive className="font-bold" size={20}/></span>
                                        <div className="items-center ml-3">
                                            <span className="font-bold">Стаж</span>
                                            <p className="mt-2 leading-5 text-sm">не менее 2 лет</p>
                                        </div>
                                    </div>
                                    <div className="text-white w-48 flex py-3 sm:border-0 ml:border-l px-3">
                                        <span><IoIosTimer className="font-bold" size={20}/></span>
                                        <div className="items-center ml-3">
                                            <span className="font-bold">Срок аренды</span>
                                            <p className="mt-2 leading-5 text-sm">от 1 часа</p>
                                        </div>
                                    </div>
                                    <div className="text-white w-48 flex py-3 px-3 lg:border-0 sm:border-l ml:border-0">
                                        <span><FaWallet className="font-bold" size={20}/></span>
                                        <div className="items-center ml-3">
                                            <span className="font-bold">Цена</span>
                                            <p className="mt-2 leading-5 text-sm">фиксированная</p>
                                        </div>
                                    </div>
                                    <div className="text-white w-48 flex py-3 px-3 lg:border-0 ml:border-l">
                                        <span><FaHandshake className="font-bold" size={20}/></span>
                                        <div className="items-center ml-3">
                                            <span className="font-bold">Управление</span>
                                            <p className="mt-2 leading-5 text-sm">возможна передача</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

