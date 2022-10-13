import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart,
} from "../../store/cart/cart.action";

import {
    ImageContainer,
    CheckoutItemContainer,
} from "./checkout-item.styles.js";
import { CartItem } from "../../store/cart/cart.types";

export type CheckoutItemProps = {
    cartItem: CartItem;
};

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    const { name, imageUrl, price, quantity } = cartItem;

    const clearItemHandler = () =>
        dispatch(clearItemFromCart(cartItems, cartItem));

    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

    const removeItemHandler = () =>
        dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemHandler}>
                &#10005;
            </div>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;