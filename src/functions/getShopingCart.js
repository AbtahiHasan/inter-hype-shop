import { getShoppingCart } from "./fakedb";

const getStoredCart = async () => {
    const res = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json");
    const storedCartData = await res.json();

    const storedCart = getShoppingCart();
    const savedCart = []
    for(let id in storedCart) {
        const cartData = storedCartData.find((cart) => cart.id === id);
        if(cartData) {
            cartData.quantity = storedCart[id]
            savedCart.push(cartData)
        }

    }
    return savedCart
}

export default getStoredCart