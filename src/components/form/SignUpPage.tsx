import React from "react";
import * as z from "zod";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const schema = z.object({
    name: z.string(),
    lastName: z.string(),
    select: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    exseptPassword: z.string().min(6),
    age: z.string(),
  });

  type FormData = (typeof schema)["_output"];
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      select: "",
      email: "",
      password: "",
      exseptPassword: "",
      age: "",
    },
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-screen h-screen bg-[#eeedeb] flex items-center justify-center">
        <div className=" shadow-2xl  bg-white rounded-2xl  w-[1000px] h-[700px] p-5">
          <h1 className=" font-bold text-center text-3xl font-sans">
            Регистрация
          </h1>
          <div className=" mt-[20px] flex justify-center">
            <div>
              <div className=" w-[100%] flex justify-between">
                <div>
                  <div className=" mb-2">
                    <label
                      className=" font-bold font-sans text-xl"
                      htmlFor="name"
                    >
                      Имя:
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="name"
                      placeholder="Имя"
                      className=" input-primary focus:outline focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800 p-3 border-2 focus:outline-none  border-black rounded-md  w-[400px]  mb-5"
                    />
                  </div>
                </div>
                <div className=" ml-5">
                  <div className="  mb-2">
                    <label
                      className=" font-bold font-sans text-xl"
                      htmlFor="lastName"
                    >
                      Фамилия:
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Фамилия"
                      className=" input-primary focus:outline focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800 p-3 border-2 focus:outline-none  border-black rounded-md  w-[400px]  mb-5"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <div className=" mb-2">
                    <label
                      className=" font-bold font-sans text-xl"
                      htmlFor="select"
                    >
                      Выберите направление:
                    </label>
                  </div>
                  <div>
                    <Controller
                      name="select"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <select
                          {...field}
                          className="select-primary focus:outline focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800 p-3 border-2 focus:outline-none  border-black rounded-md h-[52px]  w-[400px]  mb-5"
                        >
                          <option value="" disabled>
                            Выберите своё направление
                          </option>
                          <option value="volunteer">Volunteer</option>
                          <option value="manager">Manager</option>
                        </select>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <div className=" ml-5">
                    <div className=" mb-2">
                      <label
                        className=" font-bold font-sans text-xl"
                        htmlFor="email"
                      >
                        Email:
                      </label>
                    </div>
                    <div>
                      {errors.email && (
                        <p className=" text-red-800">{errors.email.message}</p>
                      )}
                      <input
                        type="email"
                        id="email"
                        {...register("email")}
                        placeholder="example@gmail.com"
                        className=" input-primary focus:outline focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800 p-3 border-2 focus:outline-none  border-black rounded-md  w-[400px]  mb-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <div className=" mb-2">
                    <label
                      className="  font-bold font-sans text-xl"
                      htmlFor="password"
                    >
                      Пароль:
                    </label>
                  </div>
                  <div>
                    {errors.password && (
                      <p className=" text-red-800">{errors.password.message}</p>
                    )}
                    <input
                      type="password"
                      id="password"
                      {...register("password")}
                      placeholder="Пароль"
                      className=" input-primary focus:outline  focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800  p-3 border-2  rounded-md border-black w-[400px]  mb-5"
                    />
                  </div>
                </div>
                <div className=" ml-5">
                  <div className=" mb-2">
                    <label
                      className="  font-bold font-sans text-xl"
                      htmlFor="exseptPassword"
                    >
                      Потвердить пароль:
                    </label>
                  </div>
                  <div>
                    {errors.exseptPassword && (
                      <p className=" text-red-800">
                        {errors.exseptPassword.message}
                      </p>
                    )}
                    <input
                      type="password"
                      id="exseptPassword"
                      placeholder=" Потвердите пароль"
                      {...register("exseptPassword")}
                      className=" input-primary focus:outline  focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800  p-3 border-2  rounded-md border-black w-[400px]  mb-5"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <div className=" mb-2">
                    <label
                      className=" font-bold font-sans text-xl"
                      htmlFor="age"
                    >
                      Возраст:
                    </label>
                  </div>
                  <div>
                    {errors.age && (
                      <p className=" text-red-800">{errors.age.message}</p>
                    )}
                    <input
                      type="number"
                      id="age"
                      {...register("age")}
                      placeholder="Возраст"
                      className=" input-primary focus:outline focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800 p-3 border-2 focus:outline-none  border-black rounded-md  w-[400px]  mb-5"
                    />
                  </div>
                </div>
              </div>
              <p>
                У вас есть аккаунт?
                <Link to="/signin" className=" text-blue-500">
                  Войти
                </Link>
              </p>
            </div>
          </div>
          <div className="flex justify-around mt-[70px]">
            <button className=" text-center font-sans  text-xl  font-bold btn-primary p-3 rounded-md  w-[320px]">
              Назад
            </button>
            <button
              type="submit"
              className="text-center font-sans text-xl  font-bold btn-primary  p-2 rounded-md w-[320px] "
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUpPage;
