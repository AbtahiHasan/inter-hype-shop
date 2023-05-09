import { RiDeleteBin5Fill } from "react-icons/ri";

const OrderCart = ({singleCart, deleleCart}) => {
    const {id, name, price, quantity, img} = singleCart;
    return (
        <section className='mb-[21px] border max-w-[571px] mx-auto p-[8px] rounded-[8px] flex gap-[16px]'>
            <img className='w-[91px] h-[91px] rounded-[6px]' src={img} alt="" />
            <div className="flex justify-between items-center w-full">
                <div>
                    <h3 className='text-[21px]'>{name}</h3>
                    <p>Price: <span className='text-[#FF9900] text-[15px]'> ${price}</span></p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div onClick={() => deleleCart(id)} className="ml-auto w-[55px] h-[55px] rounded-full bg-[#eb57574c] flex justify-center items-center cursor-pointer">
                    <RiDeleteBin5Fill className="text-[#EB5757] text-[27px]" />
                </div>
            </div>

        </section>
    );
};

export default OrderCart;