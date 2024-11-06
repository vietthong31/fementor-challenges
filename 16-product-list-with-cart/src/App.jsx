import { useState } from 'react';
import { Cart } from './components/Cart';
import { Dessert } from './components/Dessert';
import { Confirm } from './components/Confirm';

const DESSERTS = [
  {
    shortName: 'Waffle',
    name: 'Waffle with Berries',
    price: 6.5,
    image: 'image-waffle',
  },
  {
    shortName: 'Crème Brûlée',
    name: 'Vanilla Bean Crème Brûlée',
    price: 7.0,
    image: 'image-creme-brulee',
  },
  {
    shortName: 'Macaron',
    name: 'Macaron Mix of Five',
    price: 8.0,
    image: 'image-macaron',
  },
  {
    shortName: 'Tiramisu',
    name: 'Classic Tiramisu',
    price: 5.5,
    image: 'image-tiramisu',
  },
  {
    shortName: 'Baklava',
    name: 'Pistachio Baklava',
    price: 4.0,
    image: 'image-baklava',
  },
  {
    shortName: 'Pie',
    name: 'Lemon Meringue Pie',
    price: 5.0,
    image: 'image-meringue',
  },
  {
    shortName: 'Cake',
    name: 'Red Velvet Cake',
    price: 4.5,
    image: 'image-cake',
  },
  {
    shortName: 'Brownie',
    name: 'Salted Caramel Brownie',
    price: 5.5,
    image: 'image-brownie',
  },
  {
    shortName: 'Panna Cotta',
    name: 'Vanilla Panna Cotta',
    price: 6.5,
    image: 'image-panna-cotta',
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  function startNewOrder() {
    setCartItems([]);
    setOrderConfirmed(false);
  }

  const desserts = DESSERTS.map((dessert) => (
    <Dessert
      key={dessert.shortName}
      info={dessert}
      className="basis-full md:basis-[30%] relative"
      cartItems={cartItems}
      setCartItems={setCartItems}
    />
  ));

  return (
    <main
      className="bg-rose-50 p-[1rem_1.5rem] md:grid md:grid-cols-[2.5fr_1fr] md:grid-rows-[auto_auto] md:gap-[0_2rem]
        md:p-20"
    >
      <h1>Desserts</h1>
      <div className="flex flex-wrap items-center gap-6 my-4 md:row-[2/3] md:justify-between">
        {desserts}
      </div>
      <Cart
        className="cart md:row-[1/-1] md:h-fit mb-8"
        cartItems={cartItems}
        setCartItems={setCartItems}
        setOrderConfirmed={setOrderConfirmed}
      />
      <Confirm
        className={!orderConfirmed && 'hidden'}
        cartItems={cartItems}
        startNewOrder={startNewOrder}
      />
    </main>
  );
}

export default App;
