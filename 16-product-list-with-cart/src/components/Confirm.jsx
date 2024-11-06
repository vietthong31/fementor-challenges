import { formatPrice } from '../utils';
import { Button } from './Button';
import { OrderConfirm } from './Icon';

function OrderItem({ item }) {
  const thumbnail = new URL(`../assets/images/${item.image}-thumbnail.jpg`, import.meta.url).href;
  return (
    <div className="relative flex items-center pb-4 border-b border-rose-100">
      <img src={thumbnail} alt={`${item.name} thumbnail`} width="100" className="rounded-md" />
      <div className="ml-4 mr-auto">
        <p className="font-semibold">{item.name}</p>
        <div className="flex gap-4">
          <span className="text-red font-semibold">{`${item.quantity}x`}</span>
          <span className="text-rose-500">@ {formatPrice(item.price)}</span>
        </div>
      </div>
      <span className="font-semibold">{formatPrice(item.price * Number(item.quantity))}</span>
    </div>
  );
}

export function Confirm({ className, cartItems, startNewOrder }) {
  return (
    <div
      className={
        className +
        ' fixed top-0 left-0 w-full h-full flex justify-center items-end md:items-center bg-[rgba(0,0,0,0.5)]'
      }
    >
      <div className="order bg-white p-8 rounded-xl flex flex-col gap-4 max-h-[90vh] overflow-auto md:w-1/3">
        <OrderConfirm className="shrink-0" />
        <h2 className="font-bold text-3xl">Order Confirmed</h2>
        <p className="text-rose-400">We hope you enjoy your food!</p>
        <div className="bg-rose-50 rounded-md p-4 flex flex-col gap-4">
          {cartItems.map((item, index) => (
            <OrderItem key={index} item={item} />
          ))}
          <div className="flex justify-between items-center">
            <span>Order Total</span>
            <span className="font-bold text-3xl">
              {formatPrice(
                cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
              )}
            </span>
          </div>
        </div>
        <Button
          className="w-full p-2 bg-red font-semibold text-white text-center rounded-3xl"
          onClick={() => startNewOrder()}
        >
          Start New Order
        </Button>
      </div>
    </div>
  );
}
