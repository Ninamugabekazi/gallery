import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                <NavLink to='/'>
                <li>Acceuil</li>
                </NavLink>
                <NavLink to='/Apropos'>
                <li>Apropos</li>
                </NavLink>
                <NavLink to='/Contact'>
                <li>Contact</li>
                </NavLink>
                <NavLink to='/Portfolio'>
                <li>Portfolio</li>
                </NavLink>
                <NavLink to='/Services'>
                <li>Services</li>
                </NavLink>
            </ul>
            
        </div>
    );
};

export default Menu;