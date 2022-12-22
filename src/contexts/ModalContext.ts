import React, { createContext } from 'react';

type ModalStateType = {
  show: boolean;
};

type ModalContextType = {
  modalState: ModalStateType;
  setModalState: React.Dispatch<React.SetStateAction<ModalStateType>>;
};

const defaultContext: ModalContextType = {
  modalState: { show: false },
  setModalState: () => {},
};

const ModalContext = createContext<ModalContextType>(defaultContext);

export default ModalContext;
