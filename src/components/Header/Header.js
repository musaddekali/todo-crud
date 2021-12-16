import './Header.css';
import { BsCart4 } from 'react-icons/bs';

export default function Header({ ordersQuantity, toggleCart }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">E-commerce</a>
                <div className="navbar-action-btns">
                    <button onClick={toggleCart} type="button" className="btn btn-white">
                        <span className="fs-4">
                            <BsCart4 />
                        </span>
                        <span className="badge bg-danger">{ordersQuantity}</span>
                    </button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
