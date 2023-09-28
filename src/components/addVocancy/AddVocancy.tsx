import React, { useState } from "react";
import { Modal } from "../UI/Modal";
import { toastError, toastInfo, toastSuccess } from "../toast";
import { createVacancyRequest } from "../../api/manager/mangerService";

export const AddVocancy = () => {
  const [from, setForm] = useState({
    companyName: "",
    phoneNumber: "",
    requirement: "",
    location: ""
  })
  const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...from, [e.target.name]: e.target.value })
  }
  const submitHandler = async () => {
    const formIsEmpty = Object.values({
      companyName: from.companyName,
      phoneNumber: from.phoneNumber,
      requirement: from.requirement,
      location: from.location
    }).some((val) => !val)
    if (formIsEmpty) {
      return toastInfo("Заполните все поля!")
    }
    try {
      await createVacancyRequest(from)
      setForm({
        companyName: "",
        phoneNumber: "",
        requirement: "",
        location: ""
      })
      toastSuccess("Успешно сохранен")
    } catch (error) {
      return toastError(error as string)
    }
    return formIsEmpty
  }
  return (
    <Modal
      open="y_modal_6"
      buttonItem="Добавить"
      onClickButton={submitHandler}
      modalOpenLabel="Добавить вакансии"
    >
      <form className="py-5 px-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="companyName" className="text-base text-gray-800">
            Компания
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={from.companyName}
            onChange={formChangeHandler}
            placeholder="Компания..."
            className="border-solid border border-gray-400 rounded-[0.5rem] p-2 outline-none placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phoneNumber" className="text-base text-gray-800">
            Номер телефона
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            value={from.phoneNumber}
            onChange={formChangeHandler}
            type="text"
            placeholder="+996 700 56 67 89 "
            className="border-solid border border-gray-400 rounded-[0.5rem] p-2 outline-none placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="Срок подачи" className="text-base text-gray-800">
            Требование
          </label>
          <input
            id="requirement"
            name="requirement"
            value={from.requirement}
            onChange={formChangeHandler}
            type="text"
            placeholder="Требование"
            className="border-solid border border-gray-400 rounded-[0.5rem] p-2 outline-none placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="address" className="text-base text-gray-800">
            Адрес
          </label>
          <input
            id="location"
            value={from.location}
            name="location"
            onChange={formChangeHandler}
            type="text"
            placeholder="Введите адрес "
            className="border-solid border border-gray-400 rounded-[0.5rem] p-2 outline-none placeholder:text-sm"
          />
        </div>
      </form>
    </Modal>
  );
};
