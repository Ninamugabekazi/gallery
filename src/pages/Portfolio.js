import React from 'react';
import Menu from '../Menu';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img7 from '../img/img7.jpg';
import img8 from '../img/img8.jpg';
import img9 from '../img/img9.jpg';
import img10 from '../img/img10.jpg';

const Portfolio = () => {
    return (
        <div>
            <Menu/>
               <h1>Porfolio</h1>
               <img src={img1} alt="img" height={"300 px"} width={"300 px"}/> 
               <img src={img2} alt="img" height={"300 px"} width={"300 px"}/>
               <img src={img3} alt="img" height={"300 px"} width={"300 px"}/>
               <img src={img4} alt="img" height={"300 px"} width={"300 px"}/>
               <img src={img5} alt="img" height={"300 px"} width={"300 px"}/>
               <img src={img10} alt="img" height={"300 px"} width={"300 px"}/>
               <img src={img7} alt="img" height={"300 px"} width={"300 px"}/>
               <img src={img8} alt="img" height={"300 px"} width={"300 px"}/>
               <img src={img9} alt="img" height={"300 px"} width={"300 px"}/>
        </div>
    );
};

export default Portfolio;