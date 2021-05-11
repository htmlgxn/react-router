import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className='ui raised very padded segment'>
            <button className='ui teal button'>Spaghetti</button>
            <div className='ui right floated header'>
                <button className='ui button'><NavLink to="/">Home</NavLink></button>
                <button className='ui button'><NavLink to="/about">About</NavLink></button>
                <button className='ui button'><NavLink to="/contact">Contact</NavLink></button>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);
