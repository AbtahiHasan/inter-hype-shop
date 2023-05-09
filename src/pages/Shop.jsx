import { useState, useEffect } from 'react';
import { addToDb, getShoppingCart, deleteShoppingCart} from "../functions/fakedb";
import Product from '../components/Products'
import Summary from '../components/Summary';
import { AiOutlineArrowRight } from "react-icons/ai";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const getProducts = async () => {
        const res = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json");
        const data = await res.json();
        setProducts(data)
    }
    useEffect(() => {
        getProducts()
    }, [])


    const addToCart = (product) => {
        let newCart = []
        const exists = cart.find(p => p.id === product.id);
        if(exists) {
            product.quantity += 1
            const remaining = cart.filter(p => p.id !== product.id);
            console.log(remaining)
            newCart = [...remaining, exists]            
        } else {
            product.quantity = 1 
            newCart = [...cart, product]
        }
            setCart(newCart)
            addToDb(product.id)
    }


    useEffect(() => {
        const storedData = getShoppingCart();
        const storedCartArray = [];
            for(const id in storedData) {
                const storedProduct = products.find((product) => {
                    return product.id === id;
                })
                if(storedProduct) {
                    const quantity = storedData[id]
                    storedProduct.quantity =  quantity;
                    storedCartArray.push(storedProduct)
                }
            }
            setCart(storedCartArray)
        
        
    },[products])

    const removeCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <>
             <main className='grid md:grid-cols-4 max-w-[1240px] mx-auto mt-[80px]'>
                <div className="col-span-3">
                    <div className='grid md:grid-cols-3 gap-5 mt-5 mx-3'>
                        {
                            products.map(product => {
                                return (
                                    <Product key={product.id} addToCart={addToCart} product={product}></Product>
                                    )
                            })
                        }
                    </div>
                </div>
               

                <Summary removeCart = {removeCart} cart={cart}> <p>Review Order</p><AiOutlineArrowRight/></Summary>
               
                
            </main>
        </>
       
    );
};

export default Shop;