import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const EditProduct = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const getSingleProduct = async () => {
        const res = await fetch(`http://localhost:3000/product/${id}`)
        const product = await res.json()
        setProduct(product)
    }

    useEffect(() => {
        getSingleProduct()
    },[])

    const { name, seller, category,price, stock, ratings, ratingsCount, shipping, img} = product
    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const seller = form.seller.value;
        const category = form.category.value;
        const price = form.price.value;
        const stock = form.stock.value;
        const ratings = form.ratings.value;
        const ratingsCount = form.ratingsCount.value;
        const shipping = form.shipping.value;
        const img = form.img.value;


        const newProduct = { name, seller, category,price, stock, ratings, ratingsCount, shipping, img}



        // send data to the server
        fetch(`http://localhost:3000/update-product/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data. modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }


    return (
        <div className="bg-[#F4F3F0] h-[93vh] overflow-hidden p-24">
            <div className='max-w-[1240px] mx-auto   px-3'>
            <h2 className="text-3xl font-extrabold text-center mb-5">Update Product</h2>
            <form onSubmit={handleUpdateProduct}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} autoComplete="off" placeholder="Coffee Name"  className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} autoComplete="off" placeholder="category" className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">seller </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seller" defaultValue={seller} autoComplete="off" placeholder="seller Name" className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} autoComplete="off" placeholder="price" className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Stock</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="stock" defaultValue={stock} autoComplete="off" placeholder="stock" className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="ratings" defaultValue={ratings} autoComplete="off" placeholder="ratings" className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Total Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="ratingsCount" defaultValue={ratingsCount} autoComplete="off" placeholder="Total Count" className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Shipping Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="shipping" defaultValue={shipping} autoComplete="off" placeholder="shipping price" className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="img" defaultValue={img} autoComplete="off" placeholder="Photo URL" className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Product" className="block bg-[#1C2B35] w-full py-3 rounded text-white" />

            </form>
            </div>
        </div>
    );
};

export default EditProduct;