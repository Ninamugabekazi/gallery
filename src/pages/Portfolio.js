import React from 'react';
import Menu from '../Menu';
import Portfolio from '../Portfolio.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img7 from '../img/img7.jpg';
import img8 from '../img/img8.jpg';
import img9 from '../img/img9.jpg';
import img10 from '../img/img10.jpg';


function App() {
    const responsive ={
      superLargeDesktop:{
        breakpoint :{max: 4000, min: 3000},
        limit: 5
      },
      desktop:{
        breakpoint:{max: 3000, min: 1024},
        items: 3
      },
  
     tablet:{
      breakpoint:{max: 1024, min:464},
      items: 2
    },
    mobile:{
      breakpoint:{max: 464, min:0},
      items: 1
    },
  
   };
    return (
        <div>
        <Menu/>
   <div className='App'>
    <h1>Portfolio</h1>
    <Carousel responsive={responsive}>
      <div className='car'><img  src={img1} alt="img"/> 
      <h3>Statue</h3>
      </div>
      <div className='car'> <img src={img2} alt="img"/>
      <h3>Coeur</h3>
      </div>
      <div className='car'> <img src={img3} alt="img"/>
      <h3>Statue 2</h3>
      </div>
      <div className='car'><img src={img4} alt="img"/>
      <h3>Papillon</h3>
      </div>
      <div className='car'><img src={img5} alt="img" />
      <h3>Statue</h3>
      </div>
      <div className='car'><img src={img10} alt="img" />
      <h3>Statue</h3>
      </div>
      <div className='car'> <img src={img7} alt="img"/>
      <h3>Peinture</h3>
      </div>
      <div className='car'><img src={img8} alt="img"/>
      <h3>Grue</h3>
      </div>
      <div className='car'> <img src={img9} alt="img"/>
      <h3>Lune</h3>
      </div> 
    </Carousel>
</div>
  </div>
    );
  }
  export default App;