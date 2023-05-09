import { useEffect, useState } from "react";
import AdminProduct from "../components/AdminProduct";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        setProducts(data)
    }
    useEffect(() => {
        getProducts()
    }, [])



    return (
        <div className="max-w-[1240px] mx-auto px-3 overflow-x-auto">
            <table className="w-full my-10 border-collapse text-lg ">
                <thead>
                    <tr className="bg-[#1C2B35] text-white p-[8px] h-[30px] text-left sticky top-0">
                        <th className="p-2">Id</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Category</th>
                        <th className="p-2">Seller</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Stock</th>
                        <th className="p-2">Ratings</th>
                        <th className="p-2">RatingsCount</th>
                        <th className="p-2">Shipping</th>
                        <th className="p-2">Quantity</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, i )=> <AdminProduct key={product._id} product={product} i={i}/>)
                    }
                </tbody>
                
                
            </table>
        </div>
    );
};

export default AllProducts;