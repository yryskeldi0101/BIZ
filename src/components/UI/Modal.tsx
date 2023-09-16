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
        className="btn text-center bg-gray-600 text-white hover:text-gray-600"
      >
        {modalOpenLabel}
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {children}
          <div className="modal-action gap-4">
            <label htmlFor="my_modal_6" className="btn" onClick={onClickButton}>
              {buttonItem}
            </label>
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
