// ModalContext.js
"use client"
import { createContext, useState,useEffect, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [open,setOpen]=useState(true);
    useEffect(()=>{
        document.body.style.overflow = showModal ? 'hidden' : '';
    },[showModal]);

    return (
        <ModalContext.Provider value={{ showModal, setShowModal ,open,setOpen}}>
            {children}
        </ModalContext.Provider>
    );
};

export  const useModal = () => useContext(ModalContext);
