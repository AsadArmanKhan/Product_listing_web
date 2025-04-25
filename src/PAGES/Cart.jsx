import React, { useContext, useEffect, useState } from 'react'
import { Context } from './MainContext';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { ToastContainer, toast } from 'react-toastify';

export default function Cart() {
    const { cart, setCart } = useContext(Context);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(
        () => {
            let totalCartPrice = 0
            cart.forEach(
                (cartData, cartIndex) => {
                    totalCartPrice += (cartData.price * cartData.quantity);
                    // console.log(cartData.price, cartData.quantity);

                }
            )
            setTotalPrice(totalCartPrice)
        }, [cart]
    )


    // Calculate Subtotal, Tax, Shipping, and Total dynamically
    // const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // const tax = subtotal * 0.05; // Assuming a 5% tax rate
    // const shipping = 5.00; // Static shipping cost
    // const total = subtotal + tax + shipping;

    // // Remove an item from the cart
    // const removeItem = (index) => {
    //     const updatedCart = cart.filter((_, i) => i !== index);
    //     setCart(updatedCart);
    // };

    // // Update item quantity
    // const updateQuantity = (index, quantity) => {
    //     const updatedCart = [...cart];
    //     updatedCart[index].quantity = quantity; 
    //     setCart(updatedCart);
    // };

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Cart Page</title>
            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Single Item */}


                        {cart.length === 0 ? (
                            <div className="bg-white p-10 rounded-2xl shadow-xl text-center mx-auto max-w-xl animate-fade-in-up">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                                    alt="Empty Cart"
                                    className="mx-auto w-32 h-32 mb-6 opacity-80 animate-bounce-slow"
                                />
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
                                <p className="text-gray-500 text-lg mb-6">
                                    Looks like you haven’t added anything to your cart yet.
                                </p>
                                <Link to="/shop">
                                    <button className="bg-gradient-to-r from-indigo-600 via-slate-700 to-indigo-700 hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                                        Continue Shopping
                                    </button>
                                </Link>
                            </div>
                        ) :
                            cart.map(
                                (cartdata, cartIndex) => {
                                    return (
                                        < CartRow cartIndex={cartIndex} cartdata={cartdata} setCart={setCart} key={cartIndex} cart={cart} />
                                    )
                                }
                            )
                        }
                        {/* Repeat similar items as needed */}
                    </div>
                    {/* Summary Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-md sticky top-6 h-fit">
                        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>${(totalPrice * 5 / 100).toFixed(2)} </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>${(totalPrice * 10 / 100).toFixed(2)}</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${(totalPrice + (totalPrice * 10 / 100)).toFixed(2)}</span>
                            </div>
                        </div>
                        <button className="mt-6 w-full bg-gradient-to-r from-indigo-600 via-slate-700 to-indigo-700 text-white py-3 rounded-xl text-lg font-semibold transition">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}
function CartRow({ cartdata, cartIndex, cart, setCart }) {


    const removeFromCart = (e) => {
        // ❌ Remove product from cart
        const updatedCart = cart.filter((_, index) => index !== cartIndex);
        setCart(updatedCart);
        toast.error("Product removed from Cart")

        // 🎇 Fire confetti at remove button
        const rect = e.target.getBoundingClientRect();

        confetti({
            particleCount: 70,
            spread: 60,
            startVelocity: 30,
            decay: 0.9,
            colors: ['#ff4d4d', '#ff9999', '#ff1a1a'],
            origin: {
                x: (rect.left + rect.width / 2) / window.innerWidth,
                y: (rect.top + rect.height / 2) / window.innerHeight
            }
        });
    }
    const qtyUpdate = (event, indexNum) => {
        // console.log(event.target.value);
        const oldCartData = [...cart];
        oldCartData[indexNum].quantity = event.target.value;
        setCart(oldCartData);

    }

    return (
        <>
            <div className="bg-white p-4 rounded-2xl shadow-md flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to={`/productdetail/${cartdata.id}`}>
                        <img
                            src={cartdata.thumbnail}
                            alt="Product Image"
                            className="rounded-xl"
                        />
                    </Link>
                    <div>
                        <Link
                            to={`/productdetail/${cartdata.id}`}>
                            <h2 className="text-xl font-semibold">{cartdata.title}</h2>
                        </Link>


                        <p className="text-sm text-gray-500">Category: {cartdata.category}</p>
                        <p className="text-md font-medium mt-1">Price: $ {cartdata.price}</p>
                        <div className="mt-2">
                            <label htmlFor="quantity" className="text-sm mr-2">
                                Qty:
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                defaultValue={cartdata.quantity}
                                min={1}
                                className="w-16 px-2 py-1 border rounded-md text-center"
                                onChange={() => qtyUpdate(event, cartIndex)}
                            />
                        </div>
                    </div>
                </div>
                <button
                    onClick={(e) => removeFromCart(e)}
                    className="py-2 px-3 rounded-lg border bg-red-500 hover:bg-red-600 text-white hover:text-yellow-100 text-sm"
                >
                    Remove
                </button>

                {/* <button onClick={() => deleteCartRow(cartIndex)} className="py-2  px-3 rounded-lg border bg-red-500 hover:bg-red-600 text-white hover:text-yellow-100 text-sm">
                    Remove
                </button> */}
            </div>

        </>
    );
}