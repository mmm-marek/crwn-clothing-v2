import { CartItem } from "../../store/cart/cart.types.js";
import { CartItemContainer, CartItemDetails } from "./cart-item.styles.jsx";

export type CartItemProps = {
    cartItem: CartItem;
};

const CartItem = ({ cartItem }: CartItemProps) => {
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
