import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation-container'>
            <div className='navbar'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/about'>About Me</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
        </div>
    );
}

export default Navigation;
