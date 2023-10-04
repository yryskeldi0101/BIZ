import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

const SignUpVolunteerPage = () => {
  return (
    <form>
      <div className="w-screen h-screen bg-white flex items-center justify-center">
        <div className="">
          <h1 className=" font-medium text-center text-2xl font-sans">
            Зарегистрироваться{" "}
          </h1>
          <div className="flex gap-10 pt-7">
            <div>
              <div className="">
                <label
                  className="font-sans text-sm font-medium text-gray-500"
                  htmlFor="name"
                >
                  Имя
                </label>
              </div>
              <div>
                <input
                  type="name"
                  id="name"
                  placeholder="Имя"
                  className={clsx(
                    " outline-none focus:outline focus:border-purple-500 focus:shadow focus:shadow-purple-800 p-2 placeholder:text-sm border focus:outline-none  border-purple-300 rounded-md  w-[400px]  mb-5"
                  )}
                />
              </div>
              <div className="">
                <label
                  className="font-sans text-sm font-medium text-gray-500"
                  htmlFor="email"
                >
                  Email:
                </label>
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className={clsx(
                    " outline-none focus:outline focus:border-purple-500 focus:shadow focus:shadow-purple-800 p-2 placeholder:text-sm border focus:outline-none  border-purple-300 rounded-md  w-[400px]  mb-5"
                  )}
                />
              </div>
              <div className="">
                <label
                  className="font-sans text-sm font-medium text-gray-500"
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
                  className={clsx(
                    "outline-none focus:outline  focus:border-purple-500 focus:shadow focus:shadow-purple-800 p-2 placeholder:text-sm  border  rounded-md border-purple-300 w-[400px]  mb-5"
                  )}
                />
              </div>
            </div>
            <div>
              <div className="">
                <label
                  className="font-sans text-sm font-medium text-gray-500"
                  htmlFor="lastName"
                >
                  Фамилия{" "}
                </label>
              </div>
              <div>
                <input
                  type="lastName"
                  id="lastName"
                  placeholder="Фамилия"
                  className={clsx(
                    " outline-none focus:outline focus:border-purple-500 focus:shadow focus:shadow-purple-800 p-2 placeholder:text-sm border focus:outline-none  border-purple-300 rounded-md  w-[400px]  mb-5"
                  )}
                />
              </div>
              <div className="">
                <label
                  className="font-sans text-sm font-medium text-gray-500"
                  htmlFor="age"
                >
                  Возраст{" "}
                </label>
              </div>
              <div>
                <input
                  type="age"
                  id="age"
                  placeholder="Возраст"
                  className={clsx(
                    " outline-none focus:outline focus:border-purple-500 focus:shadow focus:shadow-purple-800 p-2 placeholder:text-sm border focus:outline-none  border-purple-300 rounded-md  w-[400px]  mb-5"
                  )}
                />
              </div>
              <div className="">
                <label
                  className="font-sans text-sm font-medium text-gray-500"
                  htmlFor="exseptPassword"
                >
                  Подтвердить пароль{" "}
                </label>
              </div>
              <div>
                <input
                  type="password"
                  id="exseptPassword"
                  placeholder=" Подтвердить пароль"
                  className={clsx(
                    " outline-none focus:outline focus:border-purple-500 focus:shadow focus:shadow-purple-800 p-2 placeholder:text-sm border focus:outline-none  border-purple-300 rounded-md  w-[400px]  mb-5"
                  )}
                />
              </div>
            </div>
          </div>
          <p className="text-center text-sm">
            У вас есть аккаунт?
            <Link to="/signin" className=" text-purple-500">
              Войти
            </Link>
          </p>
          <div className="flex justify-between mt-[1.875rem]">
            <button className=" text-center font-sans text-gray-500  font-medium bg-white border border-purple-300 p-2 rounded-md px-6 ">
              Назад
            </button>
            <button
              type="submit"
              className="text-center font-sans text-white  font-medium bg-[#9747FF80] hover:bg-purple-500  p-2 rounded-md  px-6"
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUpVolunteerPage;
