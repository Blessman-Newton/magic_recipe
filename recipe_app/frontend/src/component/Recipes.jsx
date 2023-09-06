import React from 'react';
import { Link } from 'react-router-dom';
import image2 from '../asserts/images/backIcons/bg3.webp';
import './Recipes.css';


const Recipe = () => {
    return (
        <div className="recipe">
            <div className="recipe-container">
                <div className="top-recipe">
                    <img className='top-recipe-img' src={image2} alt="" />
                    <span className='span'>gg</span>
                    <div className="top-recipe-detail">
                        <span>All Demo</span>
                        <Link>Demo descript</Link>
                        <span>By Demo</span>
                    </div>
                </div>
                <div className="recipe-card">

                </div>
            </div>
        </div>
    )
}


export default Recipe;