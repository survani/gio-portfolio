import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <React.Fragment>
            <div className='navbar'>
                {/* <p>Giovani Garfias</p> */}
                <NavLink className='nav-links' to='/'>Home</NavLink>
                <NavLink className='nav-links' to='/projects'>Projects</NavLink>
                <NavLink className='nav-links' to='/about'>About Me</NavLink>
                {/*<NavLink className='nav-links' to='/hireme'>Hire Me</NavLink>*/}
                <a className="twitter-share-button" data-size='large'
                    href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20Full%20Stack%20Web%20Developer!">
                    Tweet</a>
                <a href="https://twitter.com/garfias_giovani?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large" data-show-screen-name="false" data-lang="en" data-show-count="false">Follow @garfias_giovani</a>
            </div>
        </React.Fragment>
    );
};

export default Navigation;
