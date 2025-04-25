import React, { useState } from 'react'
import Filter from '../Common/Filter'
import Products from '../Common/Products'
import { useParams } from 'react-router-dom'

export default function Shop() {

    const { slug } = useParams();
    const [rating, setRating] = useState(1);
    const [price, setPrice] = useState({ from: 0, to: 1000 });

    return (
        <>
            <div className="grid grid-cols-6">
                <div className="col-span-1">
                    <Filter slug={slug} price={price} setPrice={setPrice} setRating={setRating} rating={rating} />
                </div>
                <div className="col-span-5">
                    <Products slug={slug} rating={rating} price={price} />
                </div>
            </div>
        </>
    )
}
