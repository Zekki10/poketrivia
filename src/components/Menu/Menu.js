import './Menu.css'
import { Link } from 'react-router-dom';

export const Menu = () => {

    return(
        <div className="home_container">
            <ul className="menu_container">
                <li className="menu_item"><Link className='menu_link' to="/ClassicGame">Classic Mode</Link></li>
                <li className="menu_item"><Link className='menu_link' to="/Survival">Survival</Link></li>
                <li className="menu_item"><Link className='menu_link' to="/">Options</Link></li>
                <li className="menu_item"><Link className='menu_link' to="/">Top Score</Link></li>
            </ul>
        </div>
    )
}