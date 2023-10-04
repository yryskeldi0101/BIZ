import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { loginThunk } from "../../store/auth/authThunk";
import { toastError } from "../toast";

const SignInPage = () => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const navigate = useNavigate();

  type FormData = (typeof schema)["_output"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: FormData) => {
    const sendData = {
      email: data.email,
      password: data.password,
    };
    dispatch(loginThunk(sendData))
      .unwrap()
      .then(() => window.location.reload())
      .catch((e) => toastError("Что-то пошло не так! повторите попытку позже"));
  };
  const navigateHandler = () => {
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-screen h-screen bg-white flex items-center justify-center">
        <div className="  rounded-2xl  w-[31.25rem] h-[26.25rem] p-5">
          <h1 className=" font-medium text-center text-2xl font-sans ">
            Войти
          </h1>
          <div className="mt-3 flex justify-center">
            <div>
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
                  {...register("email")}
                  placeholder="Email"
                  className={clsx(
                    " outline-none focus:outline focus:border-purple-500 focus:shadow focus:shadow-purple-800 p-2 placeholder:text-sm border focus:outline-none  border-purple-300 rounded-md  w-[400px]  mb-5",
                    errors.email && "border border-red-700"
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
                  {...register("password")}
                  placeholder="Пароль"
                  className={clsx(
                    "outline-none focus:outline  focus:border-purple-500 focus:shadow focus:shadow-purple-800 p-2 placeholder:text-sm  border  rounded-md border-purple-300 w-[400px]  mb-5",
                    errors.password && "border border-red-700"
                  )}
                />
              </div>
              <p className="text-center text-sm">
                У вас нету аккаунта?
                <Link to="/signup" className=" text-[#A966FF]">
                  Зарегистрироваться
                </Link>
              </p>
            </div>
          </div>
          <div className="flex justify-around mt-[1.875rem]">
            <button
              onClick={navigateHandler}
              className=" text-center font-sans text-gray-500  font-bold bg-white border border-purple-300 p-2 rounded-md  w-[120px]"
            >
              Назад
            </button>
            <button
              type="submit"
              className="text-center font-sans text-white  font-bold bg-[#9747FF80] hover:bg-purple-500  p-2 rounded-md w-[120px] "
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignInPage;
