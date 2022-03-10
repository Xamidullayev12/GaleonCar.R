import React from "react"



import bg from "../../Components/images/carParc/bgCarParc.png"
// import bg2 from "../../Components/images/carParc/bgCarParc2.png"
import rentParc1 from "../../Components/images/main/AudiParc.png"
import rentParc2 from "../../Components/images/main/PorscheParc.png"
import rentParc3 from "../../Components/images/main/bmwParc.png"



import { FiMapPin } from "react-icons/fi"
import { MdAccessTime } from "react-icons/md"




function CarParcCard (props) {
    return (
        <div className={props.cardStyle}>
            <div className="relative w-full h-full hover:opacity-80 transition-all">
                <div className="w-full h-full">
                    <img className="w-full h-full" src={props.imgUrl} />
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



function ParCards(props) {
    return (
        <div className="bg-gray-900 py-10 transition-all border-y" id={props.sec_id}>
            <div className="text-center lg:pt-20 md:pt-16">
                <p className="text-gray-300 font-semibold text-xl">{props.cardsTitle}</p>
                <h1 className="lg:text-4xl md:text-2xl text-xl text-[#EDC5A2] font-bold ">АВТОПАРК</h1>
            </div>
            <div className="lg:pt-20 md-pt-16 mt-10 snap-x flex grid md:grid-cols-3 sm:grid-cols-2">
                {props.card1}
                {props.card2}
                {props.card3}
            </div>
        </div>
    )
}





export default function Car_Parc() {
    return (
        <section>
            <div className="relative object-cover w-full pb-20">
                <img className="absolute bottom-34 w-full h-full object-cover " style={{maxWidth: "100%"}} src={bg}/>
                
                <div className="lg:pt-14 pt-4 bg-auto relative">
                    <div className="text-center">
                        <p className="text-gray-300 ml:text-xl"> НАШ</p>
                        <h1 className="text-[#EDC5A2] lg:text-3 xl ml:text-3xl mt-2">АВТОПАРК</h1>
                    </div>
                    <div className=" lg:flex pt-8 max-w-screen-lg mx-auto">
                        <div className="ml:h-80 h-auto p-8 ml:w-96 w-full bg-gray-800 lg:mx-0 mx-auto">
                            <div>
                                <h1 className="text-xl text-gray-300 font-bold w-full text-center">АВТОМОБИЛЬ ПО ПОДПИСКЕ С ПОЛНЫМ ОБСЛУЖИВАНИЕМ</h1>
                            </div>
                            <div className="border-y my-4">
                                <div className="flex my-4">
                                    <span className="text-green-400"><FiMapPin size={20}/></span>
                                    <div className="pl-2">
                                        <p className="text-xs text-gray-400">Наш адрес:</p>
                                        <p className="text-gray-300 font-semibold">Санкт-Петербург, Таежная улица, 37</p>
                                    </div>
                                </div>
                                <div className="flex my-4">
                                    <span className="text-green-400"><MdAccessTime size={20}/></span>
                                    <div className="pl-2">
                                        <p className="text-xs text-gray-400">Время работы:</p>
                                        <p className="text-gray-300 font-semibold">круглосуточно</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full pt-1 mx-auto w-48">
                                <button className="px-4 py-2 bg-gray-700 border rounded text-gray-300 mx-auto">ЗАКАЗАТЬ МАШИНУ</button>
                            </div>
                        </div>
                        <div className="md:w-96 ml:w-72 h-60 md:h-96 ml:h-72 w-60 border-l-2 rounded-full ml-auto mx-3 mt-6 relative transition-all">
                            <a href="#comfort" >
                                <div className="group flex items-center absolute ml:top-10 md:right-80 ml:right-64 top-3 right-48">
                                    <span className="mm:text-xl font-semibold text-gray-300 mr-2">Премиум</span>
                                    <div className="rounded-full h-5 w-5 p-1 bg-gray-400"> 
                                        <div className="rounded-full h-3 w-3 bg-gray-300 group-hover:bg-amber-300"></div>
                                    </div>
                                </div>
                            </a>
                            <a href="#business" >
                                <div className="group flex items-center absolute md:top-44 md:right-96 ml:top-32 ml:right-72 top-20 right-56">
                                    <span className="mm:text-xl font-semibold text-gray-300 mr-2">Бизнес</span>
                                    <div className="rounded-full h-5 w-5 p-1 bg-gray-400"> 
                                        <div className="rounded-full h-3 w-3 bg-gray-300 group-hover:bg-amber-300"></div>
                                    </div>
                                </div>
                            </a>
                            <a href="#sport" >
                                <div className="group absolute md:bottom-10 md:right-80 ml:bottom-10 ml:right-64 flex items-center bottom-16 right-56">
                                    <span className="mm:text-xl font-semibold text-gray-300 mr-2">Спорт</span>
                                    <div className="rounded-full h-5 w-5 p-1 bg-gray-400"> 
                                        <div className="rounded-full h-3 w-3 bg-gray-300 group-hover:bg-amber-300"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
               </div>
           </div>
           <div>
                <ParCards  
                    sec_id={"comfort"}
                    cardsTitle={"ПРЕМИУМ"}
                    card1={<CarParcCard imgUrl={rentParc1} cardSrc={"#"}/>}
                    card2={<CarParcCard imgUrl={rentParc2} cardSrc={"#"}/>}
                    card3={<CarParcCard cardStyle={"md:block hidden"} imgUrl={rentParc3} cardSrc={"#"}/>} />
                <ParCards 
                    sec_id={"business"}
                    cardsTitle={"БИЗНЕС"}
                    card1={<CarParcCard imgUrl={rentParc1} cardSrc={"#"}/>}
                    card2={<CarParcCard imgUrl={rentParc2} cardSrc={"#"}/>}
                    card3={<CarParcCard cardStyle={"md:block hidden"} imgUrl={rentParc3} cardSrc={"#"}/>} />
                <ParCards 
                    sec_id={"sport"}
                    cardsTitle={"СПОРТ"}
                    card1={<CarParcCard imgUrl={rentParc1} cardSrc={"#"}/>}
                    card2={<CarParcCard imgUrl={rentParc2} cardSrc={"#"}/>}
                    card3={<CarParcCard cardStyle={"md:block hidden"} imgUrl={rentParc3} cardSrc={"#"}/>} />
           </div>
        </section>
    )
}






