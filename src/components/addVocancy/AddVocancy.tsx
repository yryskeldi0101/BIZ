import React from "react";
import { Modal } from "../UI/Modal";

export const AddVocancy = () => {
  return (
    <Modal
      open="y_modal_6"
      buttonItem="Добавить"
      onClickButton={() => {}}
      modalOpenLabel="Добавить вакансии"
    >
      <form className="py-16 px-6 flex flex-col gap-4">
        <div className="flex flex-col gap-6">
          <label htmlFor="Компания" className="text-2xl text-gray-600">
            Компания
          </label>
          <input
            id="Компания"
            type="text"
            placeholder="Компания..."
            className="border-solid border-2 border-gray-400 rounded-[0.5rem] p-2 outline-none"
          />
        </div>
        <div className="flex flex-col gap-6">
          <label htmlFor="должность" className="text-2xl text-gray-600">
            Должность{" "}
          </label>
          <input
            id="должность "
            type="date"
            placeholder="Должность... "
            className="border-solid border-2 border-gray-400 rounded-[0.5rem] p-2 outline-none"
          />
        </div>
        <div className="flex flex-col gap-6">
          <label htmlFor="Срок подачи" className="text-2xl text-gray-600">
            Срок подачи
          </label>
          <input
            id="Срок подачи "
            type="text"
            placeholder="Срок подачи... "
            className="border-solid border-2 border-gray-400 rounded-[0.5rem] p-2 outline-none"
          />
        </div>
        <div className="flex flex-col gap-6">
          <label htmlFor="Длительность" className="text-2xl text-gray-600">
            Длительность
          </label>
          <input
            id="Длительность "
            type="text"
            placeholder="Длительность... "
            className="border-solid border-2 border-gray-400 rounded-[0.5rem] p-2 outline-none"
          />
        </div>
      </form>
    </Modal>
  );
};
