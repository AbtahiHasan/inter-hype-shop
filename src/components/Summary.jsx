import { RiDeleteBin5Fill } from "react-icons/ri";
const Summary = ({cart, removeCart, children}) => {
    let totalPrice = 0;
    let shipingPrice = 0;
    let quantity = 0;
    
    for(const product of cart) {
        quantity += product.quantity;
        totalPrice += product.price * quantity;
        shipingPrice += product.shipping;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + shipingPrice + tax;
    return (
        <section className="sticky top-[75px] bg-[#ff99004c] rounded-[8px] p-5 h-[60vh] max-w-[500px] ">
            <h2 className='text-[25px] text-center'>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shipingPrice}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal}</p>
            <button onClick={removeCart} className="bg-[#FF3030] p-[16px] text-[21px] text-white flex justify-between w-full mt-20"><span className="text-[21px]">Clear Carts </span><RiDeleteBin5Fill /></button>
            <button className='bg-[#FF9900] p-[10px] flex w-full items-center text-white'>{children}</button>
        </section>
    );
};

export default Summary;