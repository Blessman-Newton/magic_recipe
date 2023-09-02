import React from "react";
import { Link } from 'react-router-dom';
import './Home.css';
import image1 from '../asserts/images/backIcons/bg6.jpg';
import image2 from '../asserts/images/backIcons/bg2.jpg';
import image3 from '../asserts/images/backIcons/bg3.webp';
import image4 from '../asserts/images/backIcons/bg8.jpg';
import Hero from '../component/Hero';


const Home = () => (
    <div className="">
       <Hero />
       <section className="main-container">
       <h5> <hr /> The Newest Recipe <hr /> </h5>
       <div className="home-container">
            <div className="recent-recipe">
           <img src={image3} alt="recipe" />
           <Link to='/'
            className="links"
           >
               Recipe demo
           </Link>
           <h3>Recipe demo</h3>
        </div>
        <div className="recent-recipe">
           <img src={image2} alt="recipe" />
           <Link to='/'
            className="links"
           >
               Recipe demo
           </Link>
           <h3>Recipe demo</h3>
        </div>
        <div className="recent-recipe">
           <img src={image1} alt="recipe" />
           <Link to='/'
            className="links"
           >
               Recipe demo
           </Link>
           <h3>Recipe demo</h3>
        </div>
        <div className="recent-recipe">
           <img src={image4} alt="recipe" />
           <Link to='/'
                className="links"
           >
               Recipe demo
           </Link>
           <h3>Recipe demo</h3>
        </div>
       </div>
       
        
       </section>
    </div>
);
    
export default Home;