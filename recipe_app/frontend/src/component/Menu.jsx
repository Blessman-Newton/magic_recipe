import { Link } from 'react-router-dom';
import './Menu.css'
import image3 from '../asserts/images/backIcons/bg3.webp';

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-container">
            <Link
                style={{ color: '#000', textDecoration: 'none',
                 marginBottom: '4em'}}
            >
                <div className="menu-cards">
                    <img className='menu-card-img' src={image3} alt="" />
                    <div className="menu-descrip">
                        <span>Demo</span>
                        <h4>Demo</h4>
                        <span>Demo</span>
                    </div>
                </div>
            </Link>
           <Link
                style={{ color: '#000', textDecoration: 'none',
                 marginBottom: '4em'}}
            >
                <div className="menu-cards">
                    <img className='menu-card-img' src={image3} alt="" />
                    <div className="menu-descrip">
                        <span>Demo</span>
                        <h4>Demo</h4>
                        <span>Demo</span>
                    </div>
                </div>
            </Link>
           <Link
                style={{ color: '#000', textDecoration: 'none',
                 marginBottom: '4em'}}
            >
                <div className="menu-cards">
                    <img className='menu-card-img' src={image3} alt="" />
                    <div className="menu-descrip">
                        <span>Demo</span>
                        <h4>Demo</h4>
                        <span>Demo</span>
                    </div>
                </div>
            </Link>
           <Link
                style={{ color: '#000', textDecoration: 'none',
                 marginBottom: '4em'}}
            >
                <div className="menu-cards">
                    <img className='menu-card-img' src={image3} alt="" />
                    <div className="menu-descrip">
                        <span>Demo</span>
                        <h4>Demo</h4>
                        <span>Demo</span>
                    </div>
                </div>
            </Link>
           <Link
                style={{ color: '#000', textDecoration: 'none',
                 marginBottom: '4em'}}
            >
                <div className="menu-cards">
                    <img className='menu-card-img' src={image3} alt="" />
                    <div className="menu-descrip">
                        <span>Demo</span>
                        <h4>Demo</h4>
                        <span>Demo</span>
                    </div>
                </div>
            </Link>
            <Link
                style={{ color: '#000', textDecoration: 'none',
                 marginBottom: '4em'}}
            >
                <div className="menu-cards">
                    <img className='menu-card-img' src={image3} alt="" />
                    <div className="menu-descrip">
                        <span>Demo</span>
                        <h4>Demo</h4>
                        <span>Demo</span>
                    </div>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Menu;