import React from "react";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div className="w-screen h-screen bg-[#eeedeb] flex items-center justify-center">
      <div className=" shadow-2xl  bg-white rounded-2xl  w-[500px] h-[450px] p-5">
        <h1 className=" font-bold text-center text-3xl font-sans">Вход</h1>
        <div className=" mt-[20px] flex justify-center">
          <div>
            <div className=" mb-2">
              <label className=" font-bold font-sans text-xl" htmlFor="email">
                Email:
              </label>
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="email"
                className=" input-primary focus:outline focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800 p-3 border-2 focus:outline-none  border-black rounded-md  w-[400px]  mb-5"
              />
            </div>
            <div className=" mb-2">
              <label
                className="  font-bold font-sans text-xl"
                htmlFor="password"
              >
                Пароль:
              </label>
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Пароль"
                className=" input-primary focus:outline  focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800  p-3 border-2  rounded-md border-black w-[400px]  mb-5"
              />
            </div>
            <p>
              У вас нету аккаунта?
              <Link to="/signup" className=" text-blue-500">
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </div>
        <div className="flex justify-around mt-[30px]">
          <button className=" text-center font-sans  font-bold btn-primary p-3 rounded-md  w-[120px]">
            Назад
          </button>
          <button className="text-center font-sans  font-bold btn-primary  p-2 rounded-md w-[120px] ">
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
