import React from "react"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import specialbg from "../../../Components/images/for_special_img/specialbg.png"
import airportbg from "../../../Components/images/for_special_img/airportbg.png"
import shadowbg from "../../../Components/images/for_special_img/shadowbg.png"
import airport from "../../../Components/images/for_special_img/airport.png"
import lomborghini from "../../../Components/images/for_special_img/lomborghini.png"
import bmw from "../../../Components/images/for_special_img/bmw.png"
import mercedes from "../../../Components/images/for_special_img/mercedes.png"
import fordmustang from "../../../Components/images/for_special_img/fordmustang.png"
import businesmeetengs from "../../../Components/images/for_special_img/businesmeetengs.png"
import businesmeetengsbg from "../../../Components/images/for_special_img/businesmeetengsbg.png"
import weddingbg from "../../../Components/images/for_special_img/weddingbg.png"
import wedding from "../../../Components/images/for_special_img/wedding.png"
import dates from "../../../Components/images/for_special_img/dates.png"
import datesbg from "../../../Components/images/for_special_img/datesbg.png"
import filmingbg from "../../../Components/images/for_special_img/filmingbg.png"
import filming from "../../../Components/images/for_special_img/filming.png"
import busines from "../../../Components/images/for_special_img/busines.png"
import businesbg from "../../../Components/images/for_special_img/businesbg.png"
import rent from "../../../Components/images/for_special_img/rent.png"


// import { IoAirplaneSharp } from "react-icons/io"
import { IoIosAirplane } from "react-icons/io"
import { BiUser } from "react-icons/bi"
import { ImCheckmark2 } from "react-icons/im"
import { AiFillCar } from "react-icons/ai"
import { MdSpeed } from "react-icons/md" 
import { AiFillChrome } from "react-icons/ai"


export default function for_special() {
    return (
        <section id="for special">
            <Main />
            <Airport />
            <BusinessMeetengs />
            <Wedding />
            <Dates />
            <Filming />
            <Busines /> 
            <Rent />
        </section>

    )
}


function  Main() {
    return (
        <div className="">
            <div className="transition-all lg:py-20 md:py-16 py-10" style={{background: `url(${specialbg})`}}>
                <div className="text-center">
                    <h1 className="text-gray-300 ml:text-2xl">АРЕНДА АВТОМОБИЛЯ </h1>
                    <h1 className="text-[#EDC5A2] font-bold lg:text-5xl ml:text-3xl text-xl pt-2">ДЛЯ ОСОБЫХ ЦЕЛЕЙ</h1>
                </div>
                <div className="max-w-[1166px] mx-auto px-4 flex flex-wrap lg:pt-[340px] md:pt-[250px] pt-[150px] md:pb-[170px] pb-[70px] justify-around">
                    <span className="flex text-gray-100 px-5 py-2 bg-gray-900 items-center mx-3 my-2">
                        <span className="pr-2"><IoIosAirplane size={24}/></span>
                        <span className="md:text-xl">ТРАНСФЕР</span>
                    </span>
                    <span className="flex text-gray-100 px-5 py-2 bg-gray-900 items-center mx-3 my-2">
                        <span className="pr-2"><BiUser size={24}/></span>
                        <span className="md:text-xl">бизнес встречи</span>
                    </span>
                    <span className="flex text-gray-100 px-5 py-2 bg-gray-900 items-center mx-3 my-2">
                        <span className="pr-2"><IoIosAirplane size={24}/></span>
                        <span className="md:text-xl">для свадьбы</span>
                    </span>
                    <span className="flex text-gray-100 px-5 py-2 bg-gray-900 items-center mx-3 my-2">
                        <span className="pr-2"><IoIosAirplane size={24}/></span>
                        <span className="md:text-xl">для свиданий</span>
                    </span>
                    <span className="flex text-gray-100 px-5 py-2 bg-gray-900 items-center mx-3 my-2">
                        <span className="pr-2"><IoIosAirplane size={24}/></span>
                        <span className="md:text-xl">фото и видео съемка</span>
                    </span>
                    <span className="flex text-gray-100 px-5 py-2 bg-gray-900 items-center mx-3 my-2">
                        <span className="pr-2"><IoIosAirplane size={24}/></span>
                        <span className="md:text-xl">бизнес</span>
                    </span>
                    <span className="flex text-gray-100 px-5 py-2 bg-gray-900 items-center mx-3 my-2">
                        <span className="pr-2"><IoIosAirplane size={24}/></span>
                        <span className="md:text-xl">Аренда для...</span>
                    </span>
                 
                    <button className="flex text-gray-100 px-5 py-2 bg-gray-900 items-center mx-3 my-2">
                        <span className="pr-2"><IoIosAirplane size={24}/></span>
                        <span className="md:text-xl">ЗАКАЗАТЬ </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

function Airport() {
    return (
        <div className="" style={{background: `url(${airportbg})`}}>
            <div className="" style={{background: `url(${shadowbg})`}}>
                <div className="text-center lg:pt-20 md:pt-16 pt-8">
                    <h1 className="text-gray-300 md:text-xl ">ТРАНСФЕР</h1>
                    <h1 className="mt-2 lg:text-5xl md:text-3xl text-xl font-bold text-[#FCC02A]">ИЗ АЭРОПОРТА</h1>
                </div>
                <div className="max-w-screen-xl md:flex relative ml-auto pl-2 pt-8 transition-all">
                     <div className="md:w-7/12 w-11/12 ml-auto md:absolute md:right-0 md:top-[60px]">
                        <img className="w-full" src={airport} />
                    </div>
                    
                    <div className="ml-auto md:pt-4">
                        <div className="md:max-w-[380px] w-10/12 ml-auto md:mx-0 mx-auto pt-5 pb-10">
                            <h1 className="pb-3 text-gray-200 font-bold text-2xl">В стоимость услуги входит:</h1>
                            <p className="text-gray-200 flex items-center"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span>Встреча в зоне ожидания с именной табличкой</span>
                            </p>
                            <p className="text-gray-200 flex py-3 items-center"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span>Подача автомобиля с персональным водителем в аэропорт</span>
                            </p>
                            <p className="text-gray-200 flex py-3 items-center"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span>Погрузка багажа в автомобиль</span>
                            </p>
                            <p className="text-gray-200 flex py-3 items-center "> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span>Вы заранее можете обсудить весь маршрут и выразить дополнительные пожелания к поездке с персональным менеджером</span>
                            </p>
                            <p className="text-gray-200 flex py-3 items-center"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span>В стоимость услуги входит 3 часа аренды автомобиля</span>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-7/12 md:block hidden"></div>
                </div>

                <Carousel />

            </div>
        </div>
    )
}
                        

function CarParcCard (props) {
    return (
        <div className={props.cardStyle}>
            <div className="bg-[#232731] py-3 pl-3">
                <h1 className="text-gray-200 font-bold pb-1">{props.cardTitle}</h1>
                <div className="relative flex w-full h-full hover:opacity-80 object-cover flex transition-all">
                    <div className="w-[200px] h-[120px] object-cover">
                        <img className="w-full h-full" src={props.imgUrl} />
                    </div>
                    <div className="text-gray-200 w-[100px] pl-1 pt-8">
                        <p className="flex items-center">
                            <span className="mr-2"><AiFillCar /></span>
                            <span className="text-xs">{props.cardI_1}</span>
                        </p>
                        <p className="flex items-center py-1">
                            <span className="mr-2 "><MdSpeed /></span>
                            <span className="text-xs">{props.cardI_2}</span>
                        </p>
                        <p className="flex items-center">
                            <span className="pr-2"><AiFillChrome /></span>
                            <span className="text-xs">Полный</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Carousel() {
    return (
        <div className="lg:pt-20 pt-16 md:py-10 py-6">
            <div className="h-72 max-w-screen-xl mx-auto">
                <Swiper watchSlidesProgress={true} slidesPerView={4} className="mySwiper">
                    <SwiperSlide><CarParcCard cardStyle={"w-[360px] h-[174px] px-[24px] p-3"} imgUrl={mercedes} cardTitle={"Mercedes A45 AMG"} cardI_1={"Хэтчбек"} cardI_2={"2.0l Turbo"} /></SwiperSlide>
                    <SwiperSlide><CarParcCard cardStyle={"w-[360px] h-[174px] px-[24px] p-3"} imgUrl={lomborghini} cardTitle={"Lamborghini Gallardo"} cardI_1={"Купе"} cardI_2={"5.2l V10"}/></SwiperSlide>
                    <SwiperSlide><CarParcCard cardStyle={"w-[360px] h-[174px] px-[24px] p-3"} imgUrl={fordmustang} cardTitle={"Ford Mustang 2.3 EcoBoost"} cardI_1={"Купе"} cardI_2={"2.3l EcoBoost"}/></SwiperSlide>
                    <SwiperSlide><CarParcCard cardStyle={"w-[360px] h-[174px] px-[24px] p-3"} imgUrl={bmw} cardTitle={"Mercedes A45 AMG"} cardI_1={"Купе"} cardI_2={"3.0l Turbo"}/></SwiperSlide>
                    <SwiperSlide><CarParcCard cardStyle={"w-[360px] h-[174px] px-[24px] p-3"} imgUrl={mercedes} cardTitle={"Mercedes A45 AMG"} cardI_1={"Купе"} cardI_2={"2.0l Turbo"}/></SwiperSlide>
                    <SwiperSlide><CarParcCard cardStyle={"w-[360px] h-[174px] px-[24px] p-3"} imgUrl={fordmustang} cardTitle={"Mercedes A45 AMG"} cardI_1={"Купе"} cardI_2={"2.3l EcoBoost"}/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}



function BusinessMeetengs() {
    return (
        <div style={{background: `url(${businesmeetengsbg})`}} className="">
            <div style={{background: `url(${shadowbg})`}}>
                <div className="text-center text-center">
                    <h1 className="text-gray-300 md:text-xl ">для</h1>
                    <h1 className="mt-2 lg:text-5xl md:text-3xl text-xl font-bold text-[#FCC02A]">бизнес- встреч</h1>
                </div>
                <div className="">
                    <div className="lg:pt-16 md:pt-10 pt-8 relative md:flex">
                        <div className="md:w-7/12 w-11/12 mr-5 md:[120px] ">
                            <img className="w-full" src={businesmeetengs} />
                        </div>
                        <div className="md:max-w-[386px] ml:w-10/12 md:mx-0 mx-auto ml-auto px-5 md:pt-32 pt-2">
                            <div className="md:absolute md:w-6/12 w-[90%] top-24 right-0 py-1 md:pl-10 md:bg-[#232731]">
                                <p className="text-[#FCC02A] md:text-xl">Согласитесь, одна встреча способна перевернуть всю жизнь. </p>
                                <p className="text-gray-200 text-right ml:pr-36">(Иоганн В. Гёте)</p>
                            </div>

                            <p className="text-gray-200">Порой исход деловой встречи может решить каким образом Вы на ней появитесь, приехав на встречу на дорогом автомобиле с личным водителем произведет серьезное впечатления на Ваших партнеров</p>

                            <h1 className="pb-3 text-gray-200 font-bold text-2xl md:py-6 py-2">В стоимость услуги входит:</h1>
                            <p className="text-gray-200 flex"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={30}/></span>
                                <span>Подача автомобиля с личным водителем за 15 минут до указанного Вами время при бронировании</span>
                            </p>
                            <p className="text-gray-200 flex py-3"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={30}/></span>
                                <span><span className="ьвЖfont-bold "> 2 </span>часа аренды автомобиля</span>
                            </p>
                        </div>
                    </div>
                </div>
                <Carousel />
            </div>
        </div>
    )
}



function Wedding() {
    return (
        <div className="" style={{background: `url(${weddingbg})`}}>
            <div className="" style={{background: `url(${shadowbg})`}}>
                <div className="text-center lg:pt-20 md:pt-16">
                    <h1 className="text-gray-300 md:text-xl ">для</h1>
                    <h1 className="mt-2 lg:text-5xl md:text-3xl text-xl font-bold text-[#FCC02A]">для свадьбы</h1>
                </div>
                <div className="max-w-screen-xl md:flex relative ml-auto pl-4 lg:pt-20 md:pt-16 pt-8 transition-all">
                    <div className="md:w-7/12 w-11/12 ml-auto md:absolute md:right-0 md:top-[120px]">
                        <img className="w-full" src={wedding} />
                    </div>
                    
                    <div className="ml-auto md:pt-4">
                        <div className="md:max-w-[380px] w-10/12 ml-auto md:mx-0 mx-auto pt-5 pb-10">
                            <p className="text-gray-200 text-sm ">Каждая свадьба — уникальное знаменательное событие в жизни любой пары.
                                Наша компания предоставляет широкий выбор автомобилей от классических седанов до ярких спорткаров.</p>
                            <h1 className="text-xl py-5 text-gray-200 font-bold">В стоимость услуги входит:</h1>
                            <p className="text-gray-200 flex py-3 items-center"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span className="text-sm">Подача автомобиля с личным водителем в указанное Вами время при бронировании</span>
                            </p>
                            <p className="text-gray-200 flex py-3 items-center "> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span className="text-sm"><span className="text-base md:font-bold">3</span> часа аренды автомобиля</span>
                            </p>
                            <p className="text-gray-200 flex py-3 items-center"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span className="text-sm"><span className="font-bold text-base">2</span> бокала и замечательное игристое шампанское которым Вы сможете наслаждаться во время Вашей незабываемой поездки.</span>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-7/12 md:block hidden"></div>
                </div>

                <Carousel />

            </div>
        </div>
    )
}


function Dates() {
    return (
        <div style={{background: `url(${datesbg})`}} className="">
            <div style={{background: `url(${shadowbg})`}}>
                <div className="text-center text-center">
                    <h1 className="text-gray-300 md:text-xl ">для</h1>
                    <h1 className="mt-2 lg:text-5xl md:text-3xl text-xl font-bold text-[#FCC02A]">для свиданий</h1>
                </div>
                <div className="">
                    <div className="lg:pt-16 md:pt-10 pt-8 relative md:flex">
                        <div className="md:w-7/12 w-11/12 mr-5 md:[120px] md:pt-24">
                            <img className="w-full" src={dates} />
                        </div>
                        <div className=" md:max-w-[386px] ml:w-10/12 md:mx-0 mx-auto px-5 pt-20">
                            <p className="text-gray-200 text-sm">Красивую фотосессию можно сделать не только в студийных условиях. 
                                Но и в интересных локациях нашего города и Ленинградской области.
                                Мы можем предоставить любой автомобиль из нашего автопарка для проведения фото и видеосъемок.</p>
                            <h1 className="pb-3 text-gray-200 font-bold text-2xl md:py-6 py-2">В стоимость услуги входит:</h1>
                            <p className="text-gray-200 flex"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={30}/></span>
                                <span className=" text-sm">Подача автомобиля в указанное Вами время и место при бронировании</span>
                            </p>
                            <p className="text-gray-200 flex py-3"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={30}/></span>
                                <span className=" text-sm">4 часа аренды автомобиля</span>
                            </p>
                            <p className="text-gray-200 flex"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={30}/></span>
                                <span className=" text-sm">Компания предоставит Вам маршрут по пути следования которого Вы увидите самые красивые и интересные места нашего города сможете там остановится и сделать памятные фотографии</span>
                            </p>
                            <p className="text-gray-200 flex py-3"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={30}/></span>
                                <span className=" text-sm">С персональным менеджером Вы сможете обсудить дополнительные услуги такие как: заказ цветов, прохладительных напитков или фруктов</span>
                            </p>
                        </div>
                    </div>
                </div>
                <Carousel />
            </div>
        </div>
    )
}



function Filming() {
    return (
        <div className="" style={{background: `url(${filmingbg})`}}>
            <div className="" style={{background: `url(${shadowbg})`}}>
                <div className="text-center lg:pt-20 md:pt-16">
                    <h1 className="text-gray-300 md:text-xl ">для</h1>
                    <h1 className="mt-2 lg:text-5xl md:text-3xl text-xl font-bold text-[#FCC02A]">фото и видео съемок</h1>
                </div>
                <div className="max-w-screen-xl md:flex relative ml-auto pl-4 lg:pt-20 md:pt-16 pt-8 transition-all">
                    <div className="md:w-7/12 w-11/12 ml-auto md:absolute md:right-0 md:top-[120px]">
                        <img className="w-full" src={filming} />
                    </div>
                    <div className="ml-auto md:pt-4">
                        <div className="md:max-w-[380px] w-10/12 ml-auto md:mx-0 mx-auto pt-5 pb-10">
                            <p className="text-gray-200 text-sm ">Красивую фотосессию можно сделать не только в студийных условиях.
                                 Но и в интересных локациях нашего города и Ленинградской области.
                                 Мы можем предоставить любой автомобиль из нашего автопарка для проведения фото и видеосъемок.</p>
                            <h1 className="text-xl py-5 text-gray-200 font-bold">В стоимость услуги входит:</h1>
                            <p className="text-gray-200 flex py-3 items-center"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span className="text-sm">Подача автомобиля с личным водителем в указанное Вами время при бронировании</span>
                            </p>
                            <p className="text-gray-200 flex py-3 items-center"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span className="text-sm"><span className="font-bold text-base pr-0.5">2 </span>часа аренды автомобиля для фото и видеосъемок
                                    На данную услугу можно приобрести подарочный сертификат</span>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-7/12 md:block hidden"></div>
                </div>

                <Carousel />

            </div>
        </div>
    )
}



function Busines() {
    return (
        <div style={{background: `url(${businesbg})`}} className="">
            <div style={{background: `url(${shadowbg})`}}>
                <div className="text-center text-center">
                    <h1 className="text-gray-300 md:text-xl ">для</h1>
                    <h1 className="mt-2 lg:text-5xl md:text-3xl text-xl font-bold text-[#FCC02A]">бизнеса</h1>
                </div>
                <div className="">
                    <div className="lg:pt-16 md:pt-10 pt-8 relative md:flex">
                        <div className="md:w-7/12 w-11/12 mr-5 md:[120px] md:pt-24">
                            <img className="w-full" src={busines} />
                        </div>
                        <div className=" md:max-w-[386px] ml:w-10/12 md:mx-0 mx-auto px-5 pt-20">
                            <p className="text-gray-200 text-sm pb-3">Простота, удобство и комфорт</p>
                            <p className="text-gray-200 flex"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={30}/></span>
                                <span className=" text-sm">Вам не нужно покупать машину и страховой полис</span>
                            </p>
                            <p className="text-gray-200 flex py-3"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={30}/></span>
                                <span className=" text-sm">В личном кабинете Вы сможете контролировать использования автомобиля своими сотрудниками</span>
                            </p>
                            <p className="text-gray-200 flex"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={30}/></span>
                                <span className=" text-sm">Вы самостоятельно выставляете лимиты своим сотрудникам </span>
                            </p>
                            <p className="text-gray-200 flex py-3"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={30}/></span>
                                <span className=" text-sm">Наша система позволяет построить трекер движения автомобиля</span>
                            </p>
                            <p className="text-gray-200 flex py-3"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={30}/></span>
                                <span className=" text-sm">Без суточного лимита по пробегу</span>
                            </p>
                            <p className="text-gray-200 flex py-3"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={30}/></span>
                                <span className=" text-sm">Не нужно думать о ТО и замене резины</span>
                            </p>
                            <p className="text-gray-200 flex py-3"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={30}/></span>
                                <span className=" text-sm">Техническая поддержка 24/7</span>
                            </p>
                            <p className="text-gray-200 flex py-3"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={30}/></span>
                                <span className=" text-sm">Возможность передачи права управления автомобилем</span>
                            </p>
                            <p className="text-gray-200 ">
                                <span className="text-[#FCC02A] text-2xl pr-0.5">*</span>
                                <span className="text-sm"> Подробнее об условиях Вас ознакомит персональный менеджер</span>
                            </p>
                        </div>
                    </div>
                </div>
                <Carousel />
            </div>
        </div>
    )
}





function Rent() {
    return (
        <div className="bg-[#232731]">
            <div className="" style={{background: `url(${shadowbg})`}}>
                <div className="text-center lg:pt-20 md:pt-16">
                    <h1 className="mt-2 lg:text-5xl md:text-3xl text-xl font-bold text-[#FCC02A]">Аренда автомобиля для ....</h1>
                </div>
                <div className="max-w-screen-xl md:flex relative ml-auto pl-4 lg:pt-20 md:pt-16 pt-8 transition-all">
                    <div className="md:w-7/12 w-11/12 ml-auto md:absolute md:right-0 md:top-[120px]">
                        <img className="w-full" src={rent} />
                    </div>
                    <div className="ml-auto md:pt-4">
                        <div className="md:max-w-[380px] w-10/12 ml-auto md:mx-0 mx-auto pt-5 pb-10">
                            <p className="text-gray-200 flex py-3 items-center"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span className="text-sm">Вы сами решаете куда и когда поехать</span>
                            </p>
                            <p className="text-gray-200 flex py-3 items-center"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span className="text-sm">Круглосуточная подача автомобиля по территории СПб и ЛО</span>
                            </p>
                            <p className="text-gray-200 flex py-3 items-center"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span className="text-sm">Не нужно думать о ТО и замене резины</span>
                            </p>
                            <p className="text-gray-200 flex py-3 items-center"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span className="text-sm">
                                    Техническая поддержка 
                                    <span className="font-bold text-base pl-0.5">24/7</span>
                                </span>
                            </p>
                            <p className="text-gray-200 flex py-3 items-center"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span className="text-sm">Возможность замены автомобиля под Ваши планы в рамках действующего договора</span>
                            </p>
                            <p className="text-gray-200 flex py-3 items-center"> 
                                <span className="text-[#FCC02A] pr-2"><ImCheckmark2 size={28}/></span>
                                <span className="text-sm">Возможность передачи права управления автомобилем</span>
                            </p>
                            <p className="text-gray-200 ">
                                <span className="text-[#FCC02A] text-2xl pr-0.5">*</span>
                                <span className="text-sm"> Подробнее об условиях Вас ознакомит персональный менеджер</span>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-7/12 md:block hidden"></div>
                </div>

                <Carousel />

            </div>
        </div>
    )
}