import { BiCartAdd } from "react-icons/bi";
const Product = ({product, addToCart}) => {
    const {img, name, price, seller, ratings} = product;
    return (
        <article className="border rounded-lg p-3 relative">
            <img src={img} alt="" />
            <div className="p-3">
                <h2 className="text-[21px] mt-[11px]">{name}</h2>
                <p className="text-[17px] mt-[11px]">Price: ${price}</p>
                <p className="text-[12px] mt-[47px]">Manufacturer : {seller}</p>
                <p className="my-[11px] pb-8">Rating: {ratings} star</p>
                <button onClick={() => addToCart(product)} className="h-[48px] border bg-[#FFE0B3] w-full absolute bottom-0 left-0 right-0 rounded-b-lg flex justify-center items-center">Add to Cart <BiCartAdd/></button>
            </div>            
        </article>
    );
};

export default Product;