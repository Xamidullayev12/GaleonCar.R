import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import with_a_drive_bg from "../../../Components/images/carParc/business/with-a-car-bg.png"
import rentParc1 from "../../../Components/images/main/AudiParc.png"
import rentParc2 from "../../../Components/images/main/PorscheParc.png"
import rentParc3 from "../../../Components/images/main/bmwParc.png"




export default function with_a_drive () {
    return (
        <section id="with_driver">
            <h1>sacadjhvbhdsbvbsdbvbknsdjnvjnjn</h1>
            <Carousel />    
            <Main mainImg={with_a_drive_bg} mainTitle={"C ВОДИТЕЛЕМ"}/>
        </section>
    )
}


function Main (props) {
    return (
        <div>
            <div className="lg:mt-4 text-center ">
                    <h2 className="text-xl text-gray-300">АРЕНДА АВТОМОБИЛЯ</h2>
                    <h1 className="text-amber-300 font-bold lg:text-5xl md:text-3xl text-xl lg:py-4 md:py-2 ">{props.mainTitle}</h1>
                </div>
                <div className="relative lg:py-20 md:py-16 py-10">
                    <div className="max-w-screen-lg">
                        <img className="w-full h-auto" src={props.mainImg} />
                    </div>
                    <div className="w-96 relative top-16 lg:absolute bottom-3 right-0 top-bottom-20 lg:w-3/6 w-9/12 bg-gray-900 mx-auto">
                        <div className="relative bottom-5 left-5 md:w-100 max-w-md border border-amber-300 lg:px-8 ml:px-4 lg:py-8 md:py-3 ">
                            <h1 className="text-center text-xl font-semibold text-gray-300">{props.infoTitle}</h1>
                            <p className="items-center flex text-gray-300 py-1">
                                <div className="h-0.5 w-3 bg-gray-500 mr-4 relative top-0"></div>
                                Вам не нужно покупать машину и страховой полис
                            </p>
                            <p className="items-center flex text-gray-300 py-1">
                                <div className="h-0.5 w-3 bg-gray-500 mr-4 relative top-0"></div>
                                В личном кабинете Вы сможете контролировать использования автомобиля своими сотрудниками
                            </p>
                            <p className="items-center flex text-gray-300 py-1">
                                <div className="h-0.5 w-3 bg-gray-500 mr-4 relative top-0"></div>
                                Вы самостоятельно выставляете лимиты своим сотрудникам
                            </p>
                            <p className="items-center flex text-gray-300 py-1">
                                <div className="h-0.5 w-3 bg-gray-500 mr-4 relative top-3"></div>
                                Наша система позволяет построить трекер движения автомобиля
                            </p> 
                            <p className="items-center flex text-gray-300 py-1">
                                <div className="h-0.5 w-3 bg-gray-500 mr-4 relative top-0"></div>
                                Без суточного лимита по пробегу
                            </p>
                            <p className="items-center flex text-gray-300 py-1">
                                <div className="h-0.5 w-3 bg-gray-500 mr-4 relative top-0"></div>
                                Не нужно думать о ТО и замене резины
                            </p>
                            <p className="items-center flex text-gray-300 py-1">
                                <div className="h-0.5 w-3 bg-gray-500 mr-4 relative top-0"></div>
                                Техническая поддержка 24/7
                            </p>
                            <p className="items-center flex text-gray-300 py-1">
                                <div className="h-0.5 w-3 bg-gray-500 mr-4 relative top-0"></div>
                                Возможность передачи права управления автомобилем
                            </p>
                            <p className="text-gray-300 text-xs py-1">
                                <span className="text-amber-300 text-xl relativer bottom-2 mr-1">*</span>
                            Подробнее c условиями Вас ознакомит персональный менеджер
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    )
}



function CarParcCard (props) {
    return (
        <div className={props.cardStyle}>
            <div className="relative w-full h-full hover:opacity-80 object-cover transition-all">
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


function Carousel() {
    return (
        <div className="h-72 lg:mt-20 mt-16 lg:my-16 md:my-10 my-6">
            <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                <SwiperSlide><CarParcCard cardStyle={"w-full h-full"} imgUrl={rentParc1} cardSrc={"#"} btnTxet={"ЗАКАЗАТЬ МАШИНУ"}/></SwiperSlide>
                <SwiperSlide><CarParcCard cardStyle={"w-full h-full"} imgUrl={rentParc2} cardSrc={"#"} btnTxet={"ЗАКАЗАТЬ МАШИНУ"}/></SwiperSlide>
                <SwiperSlide><CarParcCard cardStyle={"w-full h-full"} imgUrl={rentParc3} cardSrc={"#"} btnTxet={"ЗАКАЗАТЬ МАШИНУ"}/></SwiperSlide>
                <SwiperSlide><CarParcCard cardStyle={"w-full h-full"} imgUrl={rentParc1} cardSrc={"#"} btnTxet={"ЗАКАЗАТЬ МАШИНУ"}/></SwiperSlide>
                <SwiperSlide><CarParcCard cardStyle={"w-full h-full"} imgUrl={rentParc2} cardSrc={"#"} btnTxet={"ЗАКАЗАТЬ МАШИНУ"}/></SwiperSlide>
                <SwiperSlide><CarParcCard cardStyle={"w-full h-full"} imgUrl={rentParc3} cardSrc={"#"} btnTxet={"ЗАКАЗАТЬ МАШИНУ"}/></SwiperSlide>
            </Swiper>
        </div>
    )
}