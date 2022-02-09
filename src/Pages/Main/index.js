import React from "react"


//      Import Swipper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import styles from "../../index.css"

//      MUI
import SimpleAccordion from "../../Components/Accordion"


//      Image imports
import main from "../../Components/images/main/main.png"
import shadow from "../../Components/images/main/shadow.png"
import slider1 from "../../Components/images/main/swipper1.png"
import slider2 from "../../Components/images/main/swipper2.png"
import slider3 from "../../Components/images/main/swipper3.png"
import slider4 from "../../Components/images/main/swipper4.png"
import slider5 from "../../Components/images/main/swipper5.png"
import rentCar1 from "../../Components/images/main/AudiCard.png"
import rentCar2 from "../../Components/images/main/PorscheCard.png"
import rentCar3 from "../../Components/images/main/bmwCard.png"
import rentParc1 from "../../Components/images/main/AudiParc.png"
import rentParc2 from "../../Components/images/main/PorscheParc.png"
import rentParc3 from "../../Components/images/main/bmwParc.png"
import question from "../../Components/images/main/question.png"
import questionShadow from "../../Components/images/main/questionShadow.png"
import map from "../../Components/images/main/map.png"

//      Icons Imports
import { BsWindowDock } from "react-icons/bs"
import { FaRegUser } from "react-icons/fa"
import { BiTimeFive } from "react-icons/bi"
import { IoIosTimer } from "react-icons/io"
import { FaWallet } from "react-icons/fa"
import { FaHandshake } from "react-icons/fa"
import { FiMapPin } from "react-icons/fi"
import { BiMessageSquareDetail } from "react-icons/bi"
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { BsTelegram } from "react-icons/bs"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { NavLink } from "react-router-dom";



export default function Main() {
    return (
        <section>
            <SwipperSection />
            <Rent />
            <CarParc />
            <RentQuestion />
            <OurClients />
            <Contact />
        </section>
    )
}






function CarParcCard2 (props) {
    return (
        <div className={props.cardStyle}>
            <div className="relative w-full h-full hover:opacity-80 transition-all">
                <div className="w-full h-full">
                    <img className="w-full h-full" src={props.imgUrl} />
                    <div className="relative ml:bottom-20 bottom-10 ml:w-48 w-32 mx-auto">
                    <NavLink to={props.pageUrl} exact>
                        <a href={props.cardSrc} className="ml:text-sm text-xm text-xs">
                            <button className="shadow hover:shadow-amber-500 mx-auto shadow-white left-44 text-white ml:font-semibold hover:text-amber-500 hover:border-amber-500 text-center  ml:py-2 py-1 ml:w-52 mm:w-36 w-32 rounded border transition">{props.btnTxet}</button>
                        </a>
                    </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}


//      Swipper Section


function SwipperSection() {
    return (
        <div className="">
            <div className="" style={{background: `url(${main})`, backgroundRepeat: "no-repeat"}}>
                <div className="text-center w-full relative py-20" style={{background: `url(${shadow})`, backgroundRepeat: "no-repeat"}}>
                    <div className="">
                        <h1 className="text-gray-300 md:text-3xl sm:text-xl">АРЕНДА </h1>
                        <h2 className="main_rent-title  md:text-5xl mt-2 sm:text-3xl">ПРЕМИУМ АВТОМОБИЛЕЙ</h2>
                    </div>
                    <div className="mt-14 max-w-screen-md mx-auto">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            }}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="max-w-md md:max-h-96 max-w-lg object-cover">
                                    <img src={slider1} className="w-full h-full" />
                                </div>
                                </SwiperSlide>
                            <SwiperSlide>
                                <div className="max-w-md md:max-h-96 max-w-lg object-cover">
                                    <img src={slider2} className="w-full h-full" />
                                </div>
                                </SwiperSlide>
                            <SwiperSlide>
                                <div className="max-w-md md:max-h-96 max-w-lg object-cover">
                                    <img src={slider3} className="w-full h-full" />
                                </div>
                                </SwiperSlide>
                            <SwiperSlide>
                                <div className="max-w-md md:max-h-96 max-w-lg object-cover">
                                    <img src={slider4} className="w-full h-full" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="max-w-md md:max-h-96 max-w-lg object-cover">
                                    <img src={slider5} className="w-full h-full"/>
                                </div>
                                </SwiperSlide>
                        </Swiper>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


function CarParcCard (props) {
    return (
        <div className={props.cardStyle}>
            <div className="relative w-full h-full hover:opacity-80 transition-all">
                <div className="w-full h-full">
                    <img className="w-full h-full" src={props.imgUrl} />
                    <div className="relative ml:bottom-20 bottom-10 ml:w-48 w-32 mx-auto">
                        <a href={props.cardSrc} className="ml:text-sm text-xm text-xs">
                            <button className="shadow hover:shadow-amber-500 mx-auto shadow-white left-44 text-white ml:font-semibold hover:text-amber-500 hover:border-amber-500 text-center  ml:py-2 py-1 ml:w-52 mm:w-36 w-32 rounded border transition">{props.btnTxet}</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}



function Rent () {
    return (
        <div className="bg-black relative py-10 transition-all border-y">
            <div className="text-center lg:pt-20 md:pt-16">
                <p className="text-gray-300 font-semibold text-xl">ВИДЫ</p>
                <h1 className="lg:text-4xl md:text-2xl text-xl text-amber-300 font-bold ">АРЕНДЫ</h1>
            </div>
            <div className="lg:pt-20 md-pt-16 mt-10 snap-x flex grid md:grid-cols-3 md:px-0 px-20 grid-cols-1">
                <CarParcCard2 cardStyle={""}  imgUrl={rentCar1} cardSrc={"#with_driver"} pageUrl={"/with_a_driver"} btnTxet={"С ВОДИТЕЛЕМ"}/>
                <CarParcCard2 cardStyle={""}  imgUrl={rentCar2} cardSrc={"#for_business"} pageUrl={"/for_special"} btnTxet={"ДЛЯ ОСОБЫХ ЦЕЛЕЙ"}/>
                <CarParcCard2 cardStyle={""}  imgUrl={rentCar3} cardSrc={"#without_driver"} pageUrl={"/without_a_driver"} btnTxet={"БЕЗ ВОДИТЕЛЯ"}/>
            </div>
        </div> 
    )
}


//      Car Parc Section


function ParCards(props) {
    return (
        <div className="bg-gray-900 py-10 transition-all border-y">
            <div className="text-center lg:pt-20 md:pt-16">
                <h1 className="lg:text-4xl md:text-2xl text-xl text-amber-300 font-bold ">АВТОПАРК</h1>
                <div className="text-gray-300 mt-4">
                        <NavLink to={"/carParc"}>
                            <a href="/comfort" >
                                <span className="px-4">Премиум</span>
                            </a>
                        </NavLink>
                        <NavLink to={"/forBusiness"} exact>
                            <a href="#busness" >
                                <span className="px-4 border-l border-r border-gray-300 ">Бизнес</span>
                            </a>
                        </NavLink>
                        <NavLink to={"/carParc"} exact >
                            <a href="#sport" >
                                <span className="px-4">Спорт</span>
                            </a>
                        </NavLink>
                    </div>
            </div>
            <div className="lg:pt-20 md-pt-16 mt-10 snap-x flex grid md:grid-cols-3 sm:grid-cols-2">
                {props.card1}
                {props.card2}
                {props.card3}
            </div>
        </div>
    )
}



function CarParc() {
    return (
        <div className="bg-gray-900 w-full ">
            <ParCards  
                cardsTitle={"ПРЕМИУМ"}
                card1={<CarParcCard imgUrl={rentParc1} cardSrc={"#"}/>}
                card2={<CarParcCard imgUrl={rentParc2} cardSrc={"#"}/>}
                card3={<CarParcCard cardStyle={"md:block hidden"} imgUrl={rentParc3} cardSrc={"#"}/>} />
        </div>
    )
}



function  RentQuestion() {
    return (
        <div className="bg-gray-900 pt-6">
            <div className="w-full " style={{background: `url(${question})`, backgroundRepeat: "no-repeat"}} >
                <div className="w-full " style={{background: `url(${questionShadow})`, backgroundRepeat: "no-repeat"}}>
                    <div className="max-w-screen-xl mx-auto md:py-4">
                        <div className="text-amber-300 text-center mt-10">
                            <p className="text-gray-300">УСЛОВИЯ</p>
                            <h1 className="font-bold text-xl md:text-3xl mt-2">АРЕНДЫ</h1>
                        </div>
                        <div className="mt-10 lg:flex justify-between">
                            <div className="max-w-screen-sm lg:mx-0 mx-auto lg:mb-0 mb-10">
                                <SimpleAccordion />
                            </div>
                            <div className="flex justify-center mix-blend-difference max-w-screen-md mx-auto">
                                

                                <div className="grid lg:grid-cols-1 sm:grid-cols-3 ml:grid-cols-2 md:p-8 p-3 bg-gray-900 outline outline-amber-600 outline-offset-8">
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


function OurClients() {
    return (
        <div className="bg-black">
            <div>
                <div className="text-center">
                    <p className="text-xl text-gray-300">ОТЗЫВЫ</p>
                    <h1 className="lg:text-3xl font-bold text-amber-300">НАШИХ КЛИЕНТОВ</h1>
                </div>
            </div>
        </div>
    )
}

function Contact () {
    return (
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
    )
}



