import React from 'react';
import './Products.css';
import { BsCart } from 'react-icons/bs';

function SingleProduct({ goods, getOrders }) {
    const { id, title, price, description, image, category } = goods;
    return (
        <div className="col-md-3 col-sm-4 col-6 d-flex align-items-stretch mb-5">
            <div className="card product w-100 text-center">
                <div className="image">
                    <img src={image} className="card-img-top img" alt={title.substring(0, 20)} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="price text-info">
                        <h5>{price}$</h5>
                    </div>
                    <div className="pt-3">
                        <button onClick={() => getOrders(id)} className="btn btn-primary d-flex align-items-center justify-content-center w-100">
                            <span className="pe-2"><BsCart /></span>
                            Add Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Products({ goods, getOrders }) {
    return (
        <div className="container">
            <div className="row">
                {
                    goods.map((item) => {
                        return (
                            <SingleProduct key={item.id} goods={item} getOrders={getOrders} />
                        )
                    })
                }
            </div>
        </div>
    )
}
