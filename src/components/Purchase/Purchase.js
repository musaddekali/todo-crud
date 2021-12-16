import React, { useState } from 'react';
import './Purchase.css';
import { BsChevronCompactRight, BsMinecartLoaded } from 'react-icons/bs';

function OrderItem({ order, removeOrder }) {
    const { id, image, title, price } = order;
    return (
        <div className="order-item">
            <div className="image">
                <img src={image} alt="image" className="img" />
            </div>
            <div className="name">
                <span>{title}</span>
            </div>
            <div className="price">
                <span>${price}</span>
            </div>
            <div onClick={() => { removeOrder(id)}} className="remove">
                <svg fill="currentColor" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" data-reactid=".lsxiq5nsxc.3.0.1.3.1.4:$express_20195.3.1.0"><rect x="19.49" y="46.963" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 121.571 49.0636)" width="62.267" height="5.495" data-reactid=".lsxiq5nsxc.3.0.1.3.1.4:$express_20195.3.1.0.0"></rect><rect x="18.575" y="47.876" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 49.062 121.5686)" width="62.268" height="5.495" data-reactid=".lsxiq5nsxc.3.0.1.3.1.4:$express_20195.3.1.0.1"></rect></svg>
            </div>
        </div>
    )
}

export default function Purchase({ orders, removeOrder,toggleCart,isCartOpen }) {

    const totalAmmount = orders.reduce((total, item) => total + item.price, 0);
  
    return (
        <aside className={`shopping-cart-wrapper ${isCartOpen ? 'open' : ''}`}>
            <div className="shopping-cart-container">
                <div onClick={toggleCart} className="shopping-cart-btn">
                    <span><BsChevronCompactRight /></span>
                </div>
                <div className="shopping-cart">
                    <div className="header">
                        <div className="item-count">
                            <span className='cart'><BsMinecartLoaded /></span>
                            <span>{orders.length} Item</span>
                        </div>
                        <button onClick={toggleCart} className="close-btn-top">Close</button>
                    </div>
                    <div className="body">
                        {/* All Order Items Will Goes Here  */}
                        {
                            orders.map((order) => {
                                return (
                                    <OrderItem key={order.id} order={order} removeOrder={removeOrder} />
                                )
                            })
                        }

                        <div className="extra-space" style={{ height: '110px' }}></div>
                    </div>
                    <div className="footer">
                        <div className="place-order-btn">
                            <span className="place-order-text">Place Order</span>
                            <div className="total-money-count">${totalAmmount.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}
