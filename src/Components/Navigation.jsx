import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <React.Fragment>
            <div className='navbar'>
                <NavLink className='nav-links' to='/'>Home</NavLink>
                <NavLink className='nav-links' to='/projects'>Projects</NavLink>
                <NavLink className='nav-links' to='/about'>About Me</NavLink>
                <NavLink className='nav-links' to='/contact'>Contact</NavLink>
                <a href="https://twitter.com/garfias_giovani?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-screen-name="false" data-lang="en" data-show-count="false">Follow @garfias_giovani</a>
            </div>
        </React.Fragment>
    );
}

export default Navigation;
