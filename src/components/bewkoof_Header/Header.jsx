import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); 

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen); 
    };

    return (
        <header className="container-fluid">
            <div className="topbar">
                <div className="left-section">
                    <ul>
                        <li><Link to="/offers">Offers</Link></li>
                        <li><Link to="/fanbook">Fanbook</Link></li>
                        <li><Link to="/download-app">Download App</Link></li>
                        <li><Link to="/find-store">Find a Store Near Me</Link></li>
                    </ul>
                </div>
                <div className="right-section">
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/track-order">Track Order</Link></li>
                    </ul>
                </div>
            </div>

            <div className="main-header row align-items-center">
                <div className="mobile-header col-12 d-lg-none ">
                    <div className="mobile-left">
                        <button className="navbar-toggler" onClick={toggleNavbar}>
                            <i className="bi bi-list"></i> 
                        </button>

                        <Link to="/" className="mobile-logo">
                            <img src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg" alt="Bewakoof Logo" />
                        </Link>
                    </div>

                    <div className="mobile-icons">
                        <Link to="/login" aria-label="Login"><i className="bi bi-person"></i></Link> 
                        <Link to="/wishlist" aria-label="Wishlist"><i className="bi bi-heart"></i></Link>
                        <Link to="/cart" aria-label="Shopping Cart"><i className="bi bi-bag"></i></Link> 
                    </div>
                </div>

                <div className="logo col-lg-3 d-none d-lg-block">
                    <Link to="/">
                        <img src="./Images/logo.svg" alt="Bewakoof Logo" />
                    </Link>
                </div>

                <nav className="nav-links col-lg-3 d-none d-lg-block mt-2">
                    <ul>
                        <li><Link to="/men">MEN</Link></li>
                        <li><Link to="/women">WOMEN</Link></li>
                        <li><Link to="/winterwear">MOBILE COVER</Link></li>
                    </ul>
                </nav>

                <div className="search-bar col-lg-3 d-none d-lg-block mb-2">
                    <form className="searchContainer" style={{ position: "relative", borderBottom: "none" }}>
                        <i className="bi bi-search"></i> 
                        <input
                            className="searchInput form-controls"
                            placeholder="Search by product, category or collection"
                            type="text"
                            autoComplete="off"
                            aria-label="Search by product, category, or collection"
                        />
                    </form>
                </div>

                <div className="navbar-icons col-lg-3 d-none d-lg-block">
                    <Link to="/login" aria-label="Login"><i className="bi bi-person"></i></Link>
                    <Link to="/wishlist" aria-label="Wishlist"><i className="bi bi-heart"></i></Link> 
                    <Link to="/cart" aria-label="Shopping Cart"><i className="bi bi-bag m-2"></i></Link> 
                </div>
            </div>

            {isNavOpen && (
                <div className="mobile-nav">
                    <nav>
                        <ul>
                            <li><Link to="/men">MEN</Link></li>
                            <li><Link to="/women">WOMEN</Link></li>
                            <li><Link to="/winterwear">WINTERWEAR</Link></li>
                        </ul>
                    </nav>
                </div>
            )}
           
            <div className="horizontal-tabs mt-3 ">
                <ul className="tab-list">
                    {["Sale", "Men", "Women", "Winterwear", "Accessories", "Sneakers", "Bwkf x Google", "Bewakoof Air", "Heavy Duty", "Customization", "Official Merch", "Plus Size"].map(tab => (
                        <li className="tab-item" key={tab}>
                            <Link to={`/${tab.toLowerCase().replace(/\s/g, '-')}`}>{tab}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;
