import React from 'react';
import Menu from '../Menu';
import img6 from '../img/img6.jpg';

const Acceuil = () => {
    return (
        <div className='main'>
            <Menu/>
               <h1>Acceuil</h1>
               <img src={img6} alt="img" height={"500 px"} width={"500 px"}/>
            <span>
            <p className='lor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </span>
        </div>
    
    );
};

export default Acceuil;