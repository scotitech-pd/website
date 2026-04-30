"use client";
import { createContext, useContext, useState } from "react";

const ModalCtx = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalCtx.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalCtx.Provider>
  );
};

export const useModal = () => useContext(ModalCtx);
