import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FaWallet } from "react-icons/fa"
import { FaUserAlt } from "react-icons/fa"
import { BiTimeFive } from "react-icons/bi"
import { IoIosTimer } from "react-icons/io"

import with_a_drive_bg from "../../../Components/images/carParc/business/with-a-car-bg.png"
import rentParc1 from "../../../Components/images/main/AudiParc.png"
import rentParc2 from "../../../Components/images/main/PorscheParc.png"
import rentParc3 from "../../../Components/images/main/bmwParc.png"



export default function with_a_drive () {
    return (
        <section className="bg-black" id="with_driver">
            <Main mainImg={with_a_drive_bg} mainTitle={"C ВОДИТЕЛЕМ"}/>
            <Carousel />    
        </section>
    )
}


function Main (props) {
    return (
        <div>
            <div className="lg:pt-20 md:pt-14 py-6 text-center ">
                    <h2 className="text-xl text-gray-300">АРЕНДА АВТОМОБИЛЯ</h2>
                    <h1 className="text-[#EDC5A2] font-bold lg:text-5xl md:text-3xl text-xl lg:py-4 md:py-2 ">{props.mainTitle}</h1>
                </div>
                <div className="relative lg:py-20 md:py-16 py-10">
                    <div className="max-w-screen-lg">
                        <img className="w-full h-auto" src={props.mainImg} />
                    </div>
                    <div className="w-96 md:h-[306px] relative top-32 lg:absolute bottom-3 right-0 top-bottom-20 lg:w-3/6 ml:w-7/12 w-10/12  bg-gray-900 mx-auto">
                        <div className="relative bottom-5 left-5 md:w-100 max-w-md border border-[#EDC5A2] lg:px-8 ml:px-4 lg:py-8 md:py-3 ">
                            <div className="flex  my-2 ">
                                <span className="text-white"><FaWallet /></span>
                                <div className="mx-2">
                                    <p className="font-bold text-gray-300 my-0.5">Аренда</p>
                                    <p className="tetx-xs text-gray-400 my-0.5">24/7</p>
                                </div>
                            </div>
                            <div className="flex  my-2">
                                <span className="text-white"><FaUserAlt /></span>
                                <div className="mx-2">
                                    <p className="font-bold text-gray-300 my-0.5">пЕРВОКЛАССНЫЕ</p>
                                    <p className="tetx-xs text-gray-400 my-0.5">водители</p>
                                </div>
                            </div>
                            <div className="flex  my-2">
                                <span className="text-white"><BiTimeFive size={18}/></span>
                                <div className="mx-2">
                                    <p className="font-bold text-gray-300 my-0.5">ПОДАЧА</p>
                                    <p className="tetx-xs text-gray-400 my-0.5">в любую точку Санкт-Петербурга иЛенинградской области</p>
                                </div>
                            </div>
                            <div className="flex  my-2">
                                <span className="text-white"><IoIosTimer size={20}/></span>
                                <div className="mx-2">
                                    <p className="font-bold text-gray-300 my-0.5">Срок аренды</p>
                                    <p className="tetx-xs text-gray-400 my-0.5">от 1 часа</p>
                                </div>
                            </div>
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
                    <img className="w-[100%] h-[100%]" src={props.imgUrl} />
                    <div className="relative ml:bottom-20 bottom-10 ml:w-48 w-32 mx-auto">
                        <a href={props.cardSrc} className="ml:text-base text-xs">
                            <button className="shadow hover:shadow-amber-500 mx-auto shadow-white left-44 text-white ml:font-semibold hover:text-amber-500 hover:border-amber-500 text-center ml:px-8 ml:py-2 px-4 py-1 rounded border transition">С ВОДИТЕЛЕМ</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}




function Carousel() {
    return (
        <div className="lg:pt-20 md-pt-16 mt-10 snap-x flex grid md:grid-cols-3 sm:grid-cols-2 sm:px-0 ml:px-10">
            
            <CarParcCard imgUrl={rentParc1} cardSrc={"#"}/>
            <CarParcCard imgUrl={rentParc2} cardSrc={"#"}/>
            <CarParcCard cardStyle="md:block  hidden" imgUrl={rentParc3} cardSrc={"#"}/>
            
            
            
            {/* <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                <SwiperSlide><CarParcCard cardStyle={""} imgUrl={rentParc1} cardSrc={"#"} btnTxet={"ЗАКАЗАТЬ МАШИНУ"}/></SwiperSlide>
                <SwiperSlide><CarParcCard cardStyle={""} imgUrl={rentParc2} cardSrc={"#"} btnTxet={"ЗАКАЗАТЬ МАШИНУ"}/></SwiperSlide>
                <SwiperSlide><CarParcCard cardStyle={""} imgUrl={rentParc3} cardSrc={"#"} btnTxet={"ЗАКАЗАТЬ МАШИНУ"}/></SwiperSlide>
                <SwiperSlide><CarParcCard cardStyle={""} imgUrl={rentParc1} cardSrc={"#"} btnTxet={"ЗАКАЗАТЬ МАШИНУ"}/></SwiperSlide>
                <SwiperSlide><CarParcCard cardStyle={""} imgUrl={rentParc2} cardSrc={"#"} btnTxet={"ЗАКАЗАТЬ МАШИНУ"}/></SwiperSlide>
                <SwiperSlide><CarParcCard cardStyle={""} imgUrl={rentParc3} cardSrc={"#"} btnTxet={"ЗАКАЗАТЬ МАШИНУ"}/></SwiperSlide>
            </Swiper> */}
        </div>
    )
}