import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "../react-auth0-spa";

const Navigation = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <React.Fragment>
            <div className='navbar'>
            
                <NavLink className='nav-links' to='/'>Home</NavLink>
                <NavLink className='nav-links' to='/projects'>Projects</NavLink>
                <NavLink className='nav-links' to='/about'>About Me</NavLink>
                <NavLink className='nav-links' to='/contact'>Contact</NavLink>
                <NavLink className='nav-links' to='/login'>Login</NavLink>

                <div>
                {!isAuthenticated && (
                    <button onClick={() => loginWithRedirect({})}>Log in</button>
                )}

                {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
                </div>
                <a href="https://twitter.com/garfias_giovani?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-screen-name="false" data-lang="en" data-show-count="false">Follow @garfias_giovani</a>
            </div>
        </React.Fragment>
    );
}

export default Navigation;
