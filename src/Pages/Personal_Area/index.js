import React, { useRef, useState } from "react";
import FormInput from "../../Components/FormInput/index.jsx"

import './index.css'



import { AiFillGoogleCircle } from "react-icons/ai"
import { BsTelegram } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"




export default function Personal_Area() {
  
  return (
        <section className="bg-black">
          <div  id="Personal_Area"></div>
          <div className="flex flex-wrap justify-around pt-20 pb-20" >
            <Input_1 />
            <Input_2 />
            <Input_3 />
          </div>
        </section>
    )
}




function Input_1() {
  const [values, setValues] = useState({
    login:"",
    code:"",
  });

  const inputs = [
    {
      id:1,
      name:"Login",
      type:"text",
      placeholder:"Login",
      label: "Login"
    },
    {
      id:2,
      name:"Password",
      type:"password",
      placeholder:"Password",
      label: "Password"
    },
  ];

  
  
  const handleSubmit = (e) => {
    e.prventDefault();
    const data = new FormData(e.target)
    console.log(data);
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values);

  return (
    <div className="max-w-[380px] bg-gray-900 p-6 rounded my-4 h-[520px]">
      <form onSubmit={handleSubmit}>
      <div className="flex text-gray-200 mb-5">
        <button className="w-5/12 py-2 border-2 border-gray-600 hover:border-gray-200 rounded text-gray-500 hover:bg-gray-700 hover:text-gray-300">Вход</button>
        <button className="py-2 ml-auto w-5/12 py-2 border-2 border-gray-600 hover:border-gray-200 rounded text-gray-500 hover:bg-gray-700 hover:text-gray-300">Регистрация</button>
      </div>
        {inputs.map(input => (
          <FormInput key={input.id} 
          {...input} 
          value={values[input.name]} 
          onChange={onChange}/>
        ))}
        </form>
        <div className="mx-auto text-gray-200 pt-4 flex">
            <input className="mr-2 mt-1 mx-auto cursor-pointer "  type="checkbox" />
            <span className="w-9/12 mx-auto leading-5">
              Запомнить меня на этом компьютере
            </span>
        </div>
        <button className="ml-10 w-9/12 mt-3 py-2 border-2 border-gray-600 hover:border-gray-200 rounded text-gray-500 hover:bg-gray-700 hover:text-gray-300">Авторизоваться</button>
        <div>
          <p className="text-gray-200 text-center pt-5 pb-2">Войти с помощью</p>
          <div className="text-[#EDC5A2] flex mx-auto max-w-[150px] justify-around">
              <a href="#" >
                <AiFillGoogleCircle className="hover:opacity-70" size={30}/>
              </a>
              <a href="#" >
                <BsTelegram className="hover:opacity-70" size={30}/>
              </a>
              <a href="#" >
                <FaFacebook className="hover:opacity-70" size={30}/>
              </a>
          </div>
              <p className="text-center py-2 text-gray-200 leading-5">Вы можете войти через аккаунт
                  в социальных сетях</p>
        </div>
        <p className="text-[#EDC5A2] border-t text-center pt-3 cursor-pointer hover:text-opacity-70 ">Забыли пароль?</p>
    </div>
  )
}







function Input_2() {
  const [values, setValues] = useState({
    login:"",
    code:"",
    EvaporationConfirmaName:"",
    EmailAddress:"",
    Name:"",
    Surname:"",
  });

  const inputs = [
    {
      id:1,
      name:"Login",   
      type:"text",
      placeholder:"Login",
      label: "Login*"
    },
    {
      id:2,
      name:"Password",
      type:"text",
      placeholder:"Password",
      label: "Password*"
    },
    {
      id:3,
      name:"Evaporation confirmation",
      type:"text",
      placeholder:"Evaporation confirmation",
      label: "Evaporation confirmation*"
    },
    {
      id:4,
      name:"Email address",
      type:"text",
      placeholder:"Email address",
      label: "Email address*"
    },
    {
      id:5,
      name:"Name",
      type:"text",
      placeholder:"Name",
      label: "Name"
    },
    {
      id:6,
      name:"Surname",
      type:"text",
      placeholder:"Surname",
      label: "Surname"
    },
  ];

  
  
  const handleSubmit = (e) => {
    e.prventDefault();
    const data = new FormData(e.target)
    console.log(data);
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values);

  return (
    <div className="max-w-[380px] bg-gray-900 p-6 rounded my-4">
      <form onSubmit={handleSubmit}>
        <div className="flex text-gray-200 mb-4">
          <button className="w-5/12 py-2 border-2 border-gray-600 hover:border-gray-200 rounded text-gray-500 hover:bg-gray-700 hover:text-gray-300">Вход</button>
          <button className="py-2 ml-auto w-5/12 py-2 border-2 border-gray-600 hover:border-gray-200 rounded text-gray-500 hover:bg-gray-700 hover:text-gray-300">Регистрация</button>
        </div>
        {inputs.map(input => (
          <FormInput key={input.id} 
          {...input} 
          value={values[input.name]} 
          onChange={onChange}/>
        ))}
        </form>
        <div className="mx-auto text-gray-500 pt-4 flex">
            <input className="mt-1 cursor-pointer"  type="checkbox" />
            <span className="w-12/12 mx-2 leading-4 text-sm">
              Согласен на обработку личных данных
            </span>
            <span className="text-[#EDC5A2] relative bottom-2">1</span>
            
        </div>
        <div className="mx-auto text-gray-200 pt-4 flex text-gray-500">
            <span className="w-11/12 leading-4 text-sm">
              <input className="mr-2 cursor-pointer"  type="checkbox" />
              Я хочу учавствовать в бесплатной программе лояльности и получать баллы, информацию о скидках и акциях
            </span>
        </div>
        <div className="border-t md:mt-10 mt-4">
            <p className="text-gray-400 leading-4 text-sm">
              Пароль  должен быть не менее 6 символов длиной. Символом “<span className="text-xl text-[#EDC5A2]  leading-4 ">*</span>” отмечены обязательные для заполнения поля.

            </p>
            <p className="text-gray-400 leading-4 text-sm mt-4">
              1 - Настоящим в соответствии с Федеральным законом № 152-ФЗ “О персональных данных” от 27.07.2006 Вы подтверждаете свое согласие на обработку персональных данных. С политикой можно ознакомиться по ссылке.
            </p>
        </div>
    </div>
  )
}








function Input_3() {
  const [values, setValues] = useState({
    login:"",
    code:"",
  });

  const inputs = [
    {
      id:1,
      name:"Login",
      type:"text",
      placeholder:"Login",
      label: "Login"
    },
    {
      id:2,
      name:"Password",
      type:"text",
      placeholder:"Password",
      label: "Password"
    },
  ];

  
  
  const handleSubmit = (e) => {
    e.prventDefault();
    const data = new FormData(e.target)
    console.log(data);
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values);

  return (
    <div className="max-w-[380px] bg-gray-900 p-6 rounded my-4 h-[400px]">
      <div className=" mb-4">
        <p className="text-gray-500 ">
          Если вы забыли пароль, введите логин или E-Mail. Контрольная строка для смены пароля, а также ваши регистрационные данные, будут высланы вам по E-Mail.
        </p>
      </div>
        <form onSubmit={handleSubmit}>
        {inputs.map(input => (
          <FormInput key={input.id} 
          {...input} 
          value={values[input.name]} 
          onChange={onChange}/>
        ))}
        <button className="ml-20 w-6/12 mt-3 py-2 border-2 border-gray-600 hover:border-gray-200 rounded text-gray-500 hover:bg-gray-700 hover:text-gray-300">Выслать</button>
        </form>
        <p className="border-t cursor-pointer text-center mt-5 pt-3 text-[#EDC5A2]">
          Авторизация
        </p>
    </div>
  )
}











// Beautiful card css

{/* <div className="maincontainer">

<div className="thecard">
  
  <div className="thefront">fronte fase</div>

  <div className="theback">back fase</div>

</div>

</div> */}



//    Input 
{/* <div>
  <div>
  <form onSubmit={handleSubmit}>
    <FormInput name="username" placeholder="Логин" label="Логин"/>
    <FormInput name="code" placeholder="Пароль" label="Пароль" />
    <button>Submit</button>
  </form>
  </div>
</div> */}









// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Отправленное имя: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Имя:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Отправить" />
//         </form>
//       );
//     }
// }