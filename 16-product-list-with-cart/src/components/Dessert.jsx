import { formatPrice } from '../utils';
import { Button } from './Button';
import { Add, Decrement, Increment } from './Icon';

export function Dessert({ info, className, cartItems, setCartItems }) {
  const { shortName, name, price, image } = info;
  const img = {
    desktop: new URL(`../assets/images/${image}-desktop.jpg`, import.meta.url).href,
    tablet: new URL(`../assets/images/${image}-tablet.jpg`, import.meta.url).href,
    mobile: new URL(`../assets/images/${image}-mobile.jpg`, import.meta.url).href,
  };

  const item = cartItems.filter((item) => item.name === name);
  const isSelected = item.length > 0;

  function addCartItem(item) {
    setCartItems([...cartItems, item]);
  }

  function increaseItemQuantity() {
    setCartItems(
      cartItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decreaseItemQuantity() {
    setCartItems(
      cartItems.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity }
          : item,
      ),
    );
  }

  const btnClasses =
    'flex items-center p-[0.6rem_1rem] rounded-3xl gap-2 absolute bottom-20 left-[25%]';

  const button = isSelected ? (
    <div className={`${btnClasses} bg-red border border-transparent text-white`}>
      <Button
        className="h-[20px] border rounded-full p-1 fill-white hover:fill-red hover:bg-white"
        onClick={() => decreaseItemQuantity()}
      >
        <Decrement />
      </Button>
      <span className="px-6 w-16 text-center">{item[0].quantity}</span>
      <Button
        className="border rounded-full p-1 fill-white hover:fill-red hover:bg-white"
        onClick={() => increaseItemQuantity()}
      >
        <Increment />
      </Button>
    </div>
  ) : (
    <Button
      className={`${btnClasses} bg-white border border-rose-900 hover:border-red text-rose-900 font-semibold
        hover:text-red`}
      onClick={() => addCartItem({ name, price, image, quantity: 1 })}
    >
      <Add /> <span>Add to cart</span>
    </Button>
  );

  return (
    <div className={className}>
      <img
        srcSet={`${img.desktop} 502w, ${img.tablet} 427w, ${img.mobile} 654w`}
        sizes="(max-width: 420px) 340px, ((min-width: 420px) and (max-width: 820px)) 200px, 200px"
        src={img.desktop}
        alt={shortName}
        className={
          'rounded-xl w-full border-[3px]' + `${isSelected ? ' border-red' : 'border-transparent'}`
        }
      />
      <div className="mt-6">
        <p className="text-rose-500">{shortName}</p>
        <p className="text-rose-900 font-bold">{name}</p>
        <p className="text-red font-semibold">{formatPrice(price)}</p>
      </div>
      {button}
    </div>
  );
}
