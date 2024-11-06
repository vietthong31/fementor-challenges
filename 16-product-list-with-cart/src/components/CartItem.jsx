import { Button } from './Button';
import { Remove } from './Icon';
import { formatPrice } from '../utils';

export function CartItem({ item, cartItems, setCartItems }) {
  function deleteCartItem() {
    setCartItems(cartItems.filter((i) => i.name !== item.name));
  }

  return (
    <div className="relative pb-4 border-b border-rose-100">
      <p>{item.name}</p>
      <div className="flex gap-2">
        <span className="text-red font-semibold">{`${item.quantity}x`}</span>
        <span className="text-rose-500">@ {formatPrice(item.price)}</span>
        <span className="text-rose-500 font-semibold">
          {formatPrice(item.price * Number(item.quantity))}
        </span>
      </div>
      <Button
        className="border-2 border-rose-400 rounded-full p-1 absolute top-[25%] right-0 fill-rose-400
          hover:fill-rose-900 hover:border-rose-900"
        onClick={() => deleteCartItem()}
      >
        <Remove />
      </Button>
    </div>
  );
}
