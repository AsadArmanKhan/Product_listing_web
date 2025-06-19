import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import confetti from 'canvas-confetti';
import { ToastContainer, toast } from 'react-toastify';
import { Context } from './MainContext';


export default function ProductDetail() {

    const { productId } = useParams();

    const { cart, setCart } = useContext(Context);

    const [currentProduct, setCurrentProduct] = useState({})

    const [selectImage, setSelectImage] = useState();


    // console.log(currentProduct.reviews);

    const getProductDetail = () => {
        axios.get(`https://dummyjson.com/products/${productId}`).then(
            (succes) => {
                setCurrentProduct(succes.data);
                // console.log(succes.data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(
        () => {
            getProductDetail();
        }, [productId]
    )
    const addToCart = (e) => {

        const { id, title, category, price, thumbnail } = currentProduct;
        // console.log(currentProduct);

        const productDetail = { id, title, category, price, thumbnail, quantity: 1, }

        const matchProduct = cart.filter(
            (cartData, cartIndex) => {
                return (
                    cartData.id == productDetail.id
                )
            }
        )
        if (matchProduct.length == 0) {
            const finalData = [...cart, productDetail]
            setCart(finalData);
            toast.success("Product added in Cart")

        } else {
            toast.error("Product Already in Cart")
        }
        // console.log(productDetail);


        // 🎆 Confetti from button position

        if (matchProduct.length == 0) {
            const rect = e.target.getBoundingClientRect();
            confetti({
                particleCount: 100,
                spread: 80,
                origin: {
                    x: (rect.left + rect.width / 50) / window.innerWidth,
                    y: (rect.top + rect.height / 50) / window.innerHeight
                }
            });

        } else {
            // 🎇 Fire confetti at remove button
            const rect = e.target.getBoundingClientRect();
            confetti({
                particleCount: 70,
                spread: 60,
                startVelocity: 30,
                decay: 0.9,
                colors: ['#ff4d4d', '#ff9999', '#ff1a1a'],
                origin: {
                    x: (rect.left + rect.width / 50) / window.innerWidth,
                    y: (rect.top + rect.height / 50) / window.innerHeight
                }
            });
        }
    }
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    .zoom:hover {\n      transform: scale(1.05);\n      transition: transform 0.3s ease;\n    }\n  "
                }}
            />
            <div className="max-w-7xl mx-auto p-6">
                {/* Product Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-2xl p-6">
                    {/* Images Section */}
                    <div>
                        <div className="mb-4">
                            <img
                                src={currentProduct.thumbnail || selectImage}
                                alt="Main Product"
                                className="w-full h-auto rounded-xl zoom"
                            />
                        </div>
                        <div className="flex space-x-4">
                            {currentProduct.images && currentProduct.images.map((imageData, index) => {
                                return (
                                    <img
                                        onClick={() => setSelectImage(imageData)}
                                        src={imageData}
                                        alt="Thumb 1"
                                        className="w-24 h-24 object-cover rounded-lg cursor-pointer border-2 border-gray-200 hover:border-blue-500 zoom"
                                    />
                                )
                            }
                            )
                            }
                        </div>
                    </div>
                    {/* Details Section */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-4xl text-black font-bold mb-3">{currentProduct.title}</h1>
                            <div className="flex items-center mb-4">
                                <div className=" flex space-x-1 text-xl">
                                    {currentProduct.rating} /5
                                </div>
                                <span className="ml-2 text-sm ">
                                    (134 customer reviews)
                                </span>
                            </div>
                            <p className="text-3xl font-semibold text-black mb-4">${currentProduct.price}</p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {currentProduct.description}
                            </p>
                            <button onClick={addToCart} className="w-full md:w-auto bg-gradient-to-r from-indigo-600 via-slate-700 to-indigo-700 text-white font-semibold text-lg px-6 py-3 rounded-xl transition duration-300 shadow-md">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                {/* Reviews Section */}
                <div className="mt-12 bg-white p-6 shadow-2xl rounded-2xl">
                    <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
                    <div className="space-y-6">
                        {
                            currentProduct?.reviews?.map((reviewData, index) => (


                                <div className="border-b pb-4">
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-lg">{reviewData.reviewerName}</p>
                                        <div className="text-yellow-400 text-sm">{reviewData.rating}</div>
                                    </div>
                                    <p className="text-gray-600 mt-2">
                                        {reviewData.comment}
                                    </p>
                                    <p className="text-gray-600 mt-2">
                                        {reviewData.reviewerEmail}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
