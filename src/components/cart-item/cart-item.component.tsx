import { FC } from "react";

import { TCartItem } from "../../store/cart/cart.types.js";
import { CartItemContainer, CartItemDetails } from "./cart-item.styles";

export type CartItemProps = {
    cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <CartItemDetails>
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </CartItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
