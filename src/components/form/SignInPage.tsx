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
      <div className="w-screen h-screen bg-[#eeedeb] flex items-center justify-center">
        <div className=" shadow-2xl  bg-white rounded-2xl  w-[500px] h-[450px] p-5">
          <h1 className=" font-bold text-center text-3xl font-sans text-purple-600">Вход</h1>
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
                  {...register("email")}
                  placeholder="email"
                  className={clsx(
                    " input-primary focus:outline focus:border-purple-500 focus:shadow-sm focus:shadow-purple-800 p-3 border-2 focus:outline-none  border-black rounded-md  w-[400px]  mb-5",
                    errors.email && "border-2 border-red-700"
                  )}
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
                  {...register("password")}
                  placeholder="Пароль"
                  className={clsx(
                    " input-primary focus:outline  focus:border-purple-500 focus:shadow-sm focus:shadow-purple-800  p-3 border-2  rounded-md border-black w-[400px]  mb-5",
                    errors.password && "border-2 border-red-700"
                  )}
                />
              </div>
              <p>
                У вас нету аккаунта?
                <Link to="/signup" className=" text-[#A966FF]">
                  Зарегистрироваться
                </Link>
              </p>
            </div>
          </div>
          <div className="flex justify-around mt-[30px]">
            <button
              onClick={navigateHandler}
              className=" text-center font-sans text-white  font-bold bg-[#9747FF] p-3 rounded-md  w-[120px]"
            >
              Назад
            </button>
            <button
              type="submit"
              className="text-center font-sans text-white  font-bold bg-[#9747FF]  p-2 rounded-md w-[120px] "
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
