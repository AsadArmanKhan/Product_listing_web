import React, { createContext, useEffect, useState } from 'react'
export const Context = createContext();
import { ToastContainer, toast } from 'react-toastify';
export default function MainContext({ children }) {
    // const [cart, setCart] = useState([]);
    const oldCartData = JSON.parse(localStorage.getItem(`CART`)) ?? [];
    const userToken = (localStorage.getItem)(`token`) ?? '';
    const [cart, setCart] = useState(oldCartData)
    const [user, setUser] = useState(userToken);

    // console.log(oldCartData);
    useEffect(
        () => {
            localStorage.setItem(`CART`, JSON.stringify(cart));
        }, [cart]
    )
    useEffect(
        () => {
            localStorage.setItem(`token`, user)
        }, [user]
    )

    return (
        <>
            <Context.Provider value={{ user, setUser, cart, setCart }}>
                {children}
                <ToastContainer autoClose={1000} />
            </Context.Provider>
        </>

    )
}
