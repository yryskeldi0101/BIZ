import React from "react";

type ModalType = {
  children: React.ReactNode;
  open: string;
  buttonItem: string;
  onClickButton: () => void;
  modalOpenLabel: string;
};

export const Modal = ({
  children,
  open,
  buttonItem,
  onClickButton,
  modalOpenLabel,
}: ModalType) => {
  return (
    <div className="flex flex-col items-center">
      <label
        htmlFor="my_modal_6"
        className="btn text-center bg-purple-500 text-white hover:text-purple-400"
      >
        {modalOpenLabel}
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {children}
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Закрыть
            </label>
            <button className="btn" onClick={onClickButton}>
              {buttonItem}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
