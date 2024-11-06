import emptyImg from '../assets/images/illustration-empty-cart.svg';
import { formatPrice } from '../utils';
import { Button } from './Button';
import { CartItem } from './CartItem';
import { CarbonNeutral } from './Icon';

export function Cart({ className, cartItems, setCartItems, setOrderConfirmed }) {
  const totalItem = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div
      className={`${className} bg-white border rounded-xl p-4 sticky top-8 md:max-h-[85vh] md:overflow-y-auto`}
    >
      <h2 className="font-bold text-red text-xl">Your Cart ({totalItem})</h2>
      <div
        className={`my-4 flex flex-col gap-4 ${cartItems.length === 0 ? ' text-center items-center' : ''}`}
      >
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <CartItem
                key={item.name}
                item={item}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ))}
            <div className="flex justify-between items-center">
              <span>Order Total</span>
              <span className="font-bold text-3xl">{formatPrice(totalPrice)}</span>
            </div>
            <p className="bg-rose-50 flex justify-center items-center gap-2 py-2 rounded-lg">
              <CarbonNeutral />
              <span>
                This is a <strong>carbon-neutral</strong> delivery
              </span>
            </p>
            <Button
              className="w-full p-2 bg-red font-bold text-white text-center rounded-3xl"
              onClick={() => setOrderConfirmed(true)}
            >
              Confirm Order
            </Button>
          </>
        ) : (
          <>
            <img src={emptyImg} alt="" className="inline-block" />
            <p className="text-rose-500 font-bold">Your added items will appear here</p>
          </>
        )}
      </div>
    </div>
  );
}
