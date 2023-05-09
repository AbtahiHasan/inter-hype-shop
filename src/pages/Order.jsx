import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderCart from '../components/OrderCart';
import Summary from '../components/Summary';
import { removeFromDb, deleteShoppingCart } from '../functions/fakedb';
import { MdPayment } from "react-icons/md";


const Order = () => {
    const storedCart = useLoaderData()
    const [cart, setCart] = useState(storedCart)


    const deleleCart = (id) => {
        const remining = cart.filter(singleCart => singleCart.id !== id)
        setCart(remining)
        removeFromDb(id)
    }

    const removeCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='grid md:grid-cols-4 max-w-[1240px] mx-auto'>
            <div className='col-span-3 mt-20'>
            {
                cart.map((singleCart) => <OrderCart key={singleCart.id} deleleCart ={deleleCart} singleCart={singleCart}/>)
            }
            </div>
            
            
            <Summary removeCart = {removeCart} cart={cart}> <p>Proceed Checkout</p><MdPayment/></Summary>
        </div>
    );
};

export default Order;