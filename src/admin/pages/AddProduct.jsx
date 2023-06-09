import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = event => {
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
        fetch('http://localhost:3000/add-product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }


    return (
        <div className="bg-[#F4F3F0] h-[93vh] overflow-hidden p-24">
            <div className='max-w-[1240px] mx-auto   px-3'>
            <h2 className="text-3xl font-extrabold">Add a Product</h2>
            <form onSubmit={handleAddProduct}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" autoComplete="off" placeholder="product Name" className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" autoComplete="off" placeholder="category" className="border py-2 px-4 rounded w-full" />
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
                            <input type="text" name="seller" autoComplete="off" placeholder="seller Name" className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" autoComplete="off" placeholder="price" className="border py-2 px-4 rounded w-full" />
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
                            <input type="text" name="stock" autoComplete="off" placeholder="stock" className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="ratings" autoComplete="off" placeholder="ratings" className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Total Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="ratingsCount" autoComplete="off" placeholder="Total Count" className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Shipping Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="shipping" autoComplete="off" placeholder="shipping price" className="border py-2 px-4 rounded w-full" />
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
                            <input type="text" name="img" autoComplete="off" placeholder="Photo URL" className="border py-2 px-4 rounded w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="block bg-[#1C2B35] w-full py-3 rounded text-white" />

            </form>
            </div>
        </div>
    );
};

export default AddProduct;