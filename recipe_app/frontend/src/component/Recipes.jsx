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
                    <div className="recipe-card">
                        <div className='big-recipe'>
                            <img className='top-recipe-img2' src={image2} alt="" />
                            <div className='big-recipe-descript'>
                                <span>All Demo</span>
                                <Link>Demo descript</Link>
                                <span>By Demo</span>
                            </div>
                        </div>
                        <div className='big-recipe'>
                            <img className='top-recipe-img2' src={image2} alt="" />
                            <div className='big-recipe-descript'>
                                <span>All Demo</span>
                                <Link>Demo descript</Link>
                                <span>By Demo</span>
                            </div>
                        </div>
                        
                    </div>
                </div> 
                
            </div>
            <div className='big-data'>
            <hr style={{ width: '80%',}}/>
                    <img className='big-data-img' src={image2} alt="" />
                    <span>By Demo</span>
                </div>
                <div className='popular-recipe'>
                    <Link style={{ color: '#000', textDecoration: 'none', fontSize: '32px',
                     fontFamilyL:  "'Courier New', Courier, monospace"}}>
                        <div className='popular-recipe-descript'>
                        <h1>By DemoBy DemoBy De emoBy Demo</h1>
                        <span>By DemoBy DemoBy De emoBy Dem</span>
                        </div>
                    </Link>
                    
                    <div className='most-top'>
                        <div class="vertical-line"></div>
                        <div className='popular-recipe-descript3'>
                             <Link
                                 style={{ color: '#000', textDecoration: 'none'}}
                             >
                                <div className='popular-recipe-descript2'>
                                    <img className='popular-recipe-img' src={image2} alt="" />
                                    <span>By DemoBy DemoBy DBy DemoBy DemoBy Demoemo</span>
                                </div>
                            </Link>
                            <Link style={{ color: '#000', textDecoration: 'none'}} >
                                <div className='popular-recipe-descript2'>
                                    <img className='popular-recipe-img' src={image2} alt="" />
                                    <span>By DemoBy DemoBy DBy DemoBy DemoBy Demoemo</span>
                                </div>  
                            </Link>
                            <Link style={{ color: '#000', textDecoration: 'none'}} >
                                <div className='popular-recipe-descript2'>
                                    <img className='popular-recipe-img' src={image2} alt="" />
                                    <span>By DemoBy DemoBy DBy DemoBy DemoBy Demoemo</span>
                                </div>  
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default Recipe;