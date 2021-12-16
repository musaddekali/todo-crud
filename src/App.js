import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './globalStyle/globalStyle.css';
import { PRODUCTS } from './FakeData/fakeData';
import Header from "./components/Header/Header";
import Products from './components/Product/Products';
import Purchase from './components/Purchase/Purchase';

function App() {
  const goods = PRODUCTS;
  const [orders, setOrders] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  //get Orders
  function getOrders(id) {
    const order = goods.filter((item) => {
      if (orders.find((prd) => prd.id === id)) {
        return;
      }
      return item.id === id;
    });
    setOrders([...order, ...orders]);
  }


  //remove Ordered item
  function removeOrder(id) {
    const itemRemain = orders.filter((item) => {
      return item.id !== id;
    });
    setOrders(itemRemain);
  }

  // Toggle Add To Cart sidebar

  function toggleCart() {
    setIsCartOpen((current) => !current);
  }


  return (
    <>
      <Header ordersQuantity={orders.length} toggleCart={toggleCart}/>
      <main>
        <Products goods={goods} getOrders={getOrders} />
        <Purchase orders={orders} removeOrder={removeOrder} isCartOpen={isCartOpen} toggleCart={toggleCart}/>
      </main>
    </>
  );
}

export default App;
