import React from "react"

import { FiMapPin } from "react-icons/fi"
import { BiMessageSquareDetail } from "react-icons/bi"
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { BsTelegram } from "react-icons/bs"
import { AiOutlineWhatsApp } from "react-icons/ai"


import map from "../../Components/images/main/map.png"



export default function Contact () {
    return (
        <section>
                <div className="bg-black px-4 ml:pt-12">
                    <div className="ml:py-12 py-3 max-w-screen-xl mx-auto">
                        <h1 className="lg:text-5xl sm:text-3xl text-2xl font-bold text-amber-300 text-center">КОНТАКТЫ</h1>
                        <p className="lg:text-3xl sm:text-xl font-bold text-amber-300 ml:py-10 my-3">РЕКВИЗИТЫ</p>
                    </div>

                    <div className="max-w-screen-xl mx-auto pb-20">
                        <div className="max-w-screen-lg ml-auto grid ml:grid-cols-3 grid-cols-1">
                        
                            <div className="">
                                <div className="py-2">
                                    <p className="text-gray-400 text-xs py-0.5">ООО</p>
                                    <p className="text-gray-300 py-0.5">Galeoncar</p>
                                </div>
                                <div className="py-2">
                                    <p className="text-gray-400 text-xs py-0.5">ИНН</p>
                                    <p className="text-gray-300 py-0.5">7702390587</p>
                                </div>
                                <div className="py-2">
                                    <p className="text-gray-400 text-xs py-0.5">КПП</p>
                                    <p className="text-gray-300 py-0.5">770201001</p>
                                </div>
                                <div className="py-2">
                                    <p className="text-gray-400 text-xs py-0.5">ОГРН</p>
                                    <p className="text-gray-300 py-0.5">45379000000</p>
                                </div>
                                
                                <div className="py-2">
                                    <p className="text-gray-400 text-xs py-0.5">ОКПО</p>
                                    <p className="text-gray-300 py-0.5">49872183</p>
                                </div>
                                <div className="py-2">
                                        <span className="text-gray-400 text-xs py-0.5"></span>
                                        <span className="text-gray-300 py-0.5">Расчетный счет: 620601429890</span>
                                </div>
                            </div>

                            <div className="">
                                <div className="py-2">
                                    <p className="text-gray-400 text-xs py-0.5">Расчетный счет</p>
                                    <p className="text-gray-300 py-0.5">620601429890</p>
                                </div>
                                <div className="py-2">
                                    <p className="text-gray-400 text-xs py-0.5">Банк</p>
                                    <p className="text-gray-300 py-0.5">Lorem ipsum dolor sit amet</p>
                                </div>
                                <div className="py-2">
                                    <p className="text-gray-400 text-xs py-0.5">БИК</p>
                                    <p className="text-gray-300 py-0.5">Lorem ipsum dolor sit amet</p>
                                </div>
                                <div className="py-2">
                                    <p className="text-gray-400 text-xs py-0.5">Корр. счет</p>
                                    <p className="text-gray-300 py-0.5">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>

                            <div className="">
                                <div className="py-2">
                                    <p className="text-gray-400 text-xs py-0.5">Юридический адрес</p>
                                    <p className="text-gray-300 py-0.5">129110, г Москва, улица Большая Переяславская, дом 46  СТРОЕНИЕ 2, ЭТ. 4,ПОМ.I К.16,17</p>                     
                                </div>
                                <div className="py-2">
                                    <p className="text-gray-400 text-xs py-0.5">Телефон</p>
                                    <p className="text-gray-300 py-0.5"> 8 (995) 888-30-94</p>
                                </div>
                                <div className="py-2">
                                    <p className="text-gray-400 text-xs py-0.5">Генеральный директор</p>
                                    <p className="text-gray-300 py-0.5">Коржавин Павел Александрович </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="px-4" style={{background: `url(${map})`}}>
                        <div className="lg:flex justify-beteen py-16">
                            <div className="mx-auto max-w-xl">
                                <iframe className="w-full"
                                height={384}
                                style={{border: "2px solid rgb(252 211 77)"}}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414225.88930329087!2d14.068999827954114!3d46.99590051638977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47707345308f7e65%3A0x687eb6df8c618d2b!2sKlagenfurt%2C%20Austria!5e0!3m2!1sen!2srs!4v1643793775072!5m2!1sen!2srs"></iframe>
                            </div>
                            <div className="lg:mx-auto max-w-xl p-8 bg-gray-900 lg:mt-0 mt-6 lg:mx-0 mx-auto">
                                <div className="w-full border-b ">
                                    <h1 className="lg:text-3xl text-xl text-gray-300 font-bold">КОНТАКТЫ</h1>
                                    <p className="text-gray-400 py-3 text-sm">Поможем подобрать наилучший вариант</p>
                                </div>
                                <div className="w-full border-b">
                                    <div className="text-gray-300 flex my-3">
                                        <span><FiMapPin className="text-green-400" size={20}/></span>
                                        <div className="px-2">
                                            <p className="text-gray-400 text-sm">Наш адрес:</p>
                                            <p className="text-gray-300">Санкт-Петербург, Таежная улица, 37</p>
                                        </div>
                                    </div>
                                    <div className="flex py-3">
                                        <span><BiMessageSquareDetail className="text-green-400" size={20}/></span>
                                        <div className="px-2">
                                            <p className="text-gray-400 text-sm">Наша почта:</p>
                                            <p className="text-gray-300">galeoncar@internet.ru</p>
                                        </div>
                                    </div>
                                </div>
                                    <div className="pt-5">
                                        <div className="sm:flex">
                                            <button className="px-3 py-1 text-gray-300 border rounded bg-gray-800">ЗАКАЗАТЬ МАШИНУ</button>
                                            <div className=" sm:ml-10 mx-auto">
                                                <a href="tel:">
                                                    <p className="text-xl font-bold text-gray-300 ">8 (995) 888-30-94</p>
                                                </a>
                                                <p className="text-sm text-gray-400">Звоните или оставляйте заявку</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-4 max-w-xs">
                                            <span className="text-gray-300 text-sm">Мы в соц сетях:</span>
                                            <div className="flex">   
                                                <span className="text-white text-xl px-1" size={24}><AiFillFacebook /></span>
                                                <span className="text-white text-xl px-1" size={24}><AiOutlineInstagram /></span>
                                                <span className="text-white text-xl px-1" size={24}><BsTelegram /></span>
                                                <span className="text-white text-xl px-1" size={24}><AiOutlineWhatsApp /></span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </section>
    )
}