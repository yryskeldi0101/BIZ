import React from "react";
import * as z from "zod";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
const SignUpPage = () => {
  const schema = z.object({
    name: z.string().nonempty(),
    lastName: z.string().nonempty(),
    select: z.string().nonempty(),
    email: z.string().email(),
    password: z.string().min(6),
    exseptPassword: z.string().min(6),
    age: z.string().nonempty(),
  });
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(-1);
  };

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
                      {...register("name")}
                      className={clsx(
                        " input-primary focus:outline focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800 p-3 border-2 focus:outline-none  border-black rounded-md  w-[400px]  mb-5",
                        errors.name && "border-2 border-red-700"
                      )}
                      placeholder="Имя"
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
                      {...register("lastName")}
                      className={clsx(
                        " input-primary focus:outline focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800 p-3 border-2 focus:outline-none  border-black rounded-md  w-[400px]  mb-5",
                        errors.lastName && "border-2 border-red-700"
                      )}
                      placeholder="Фамилия"
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
                          className={clsx(
                            "select-primary focus:outline focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800 p-3 border-2 focus:outline-none  border-black rounded-md h-[52px]  w-[400px]  mb-5",
                            errors.select && "border-2 border-red-700"
                          )}
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
                      <input
                        type="email"
                        id="email"
                        {...register("email")}
                        className={clsx(
                          " input-primary focus:outline focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800 p-3 border-2 focus:outline-none  border-black rounded-md  w-[400px]  mb-5",
                          errors.email && "border-2 border-red-700"
                        )}
                        placeholder="example@gmail.com"
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
                    <input
                      type="password"
                      id="password"
                      {...register("password")}
                      placeholder="Пароль"
                      className={clsx(
                        " input-primary focus:outline  focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800  p-3 border-2  rounded-md border-black w-[400px]  mb-5",
                        errors.password && "border-2 border-red-700"
                      )}
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
                    <input
                      type="password"
                      id="exseptPassword"
                      placeholder=" Потвердите пароль"
                      {...register("exseptPassword")}
                      className={clsx(
                        " input-primary focus:outline  focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800  p-3 border-2  rounded-md border-black w-[400px]  mb-5",
                        errors.exseptPassword && "border-2 border-red-700"
                      )}
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
                    <input
                      type="number"
                      id="age"
                      {...register("age")}
                      className={clsx(
                        " input-primary focus:outline focus:border-blue-800 focus:shadow-sm focus:shadow-blue-800 p-3 border-2 focus:outline-none  border-black rounded-md  w-[400px]  mb-5",
                        errors.age && "border-2 border-red-700"
                      )}
                      placeholder="Возраст"
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
            <button
              onClick={navigateHandler}
              className=" text-center font-sans  text-xl  font-bold btn-primary p-3 rounded-md  w-[320px]"
            >
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
