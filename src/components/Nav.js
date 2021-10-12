import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Nav = () => {
    return (
        <section className="nav">
            <nav className="nav-right">
                <h5>send <span className="small-logo">FREIGHT</span></h5>
                <form className="form" >
                    <input type="search" name="search" placeholder="Search" className="input-search" />
                    <FaSearch className="white"/>
                </form>
            </nav>
            <div className="button-nav">
                <button type="button" className="btn btn-plain btn-normal"> Request Quote</button>
                <button type="button" className="btn  btn-green"> Book Shipment</button>
            </div>
        </section>
    )
}

export default Nav
