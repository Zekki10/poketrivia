import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import pokeContext from '../../context/pokeContext';
import './Menu.css'

export const Menu = () => {
    const { getPokes } = useContext(pokeContext)
    useEffect(() => {
        
        return( () => {
            getPokes()
            
        })
    }, [])

    return(
        <div className="home_container">
            <ul className="menu_container">
                <li className="menu_item"><Link className='menu_link' to="/ClassicGame">Classic Mode</Link></li>
                <li className="menu_item"><Link className='menu_link' to="/Survival">Survival</Link></li>
                <li className="menu_item"><Link className='menu_link' to="/">Options</Link></li>
                <li className="menu_item"><Link className='menu_link' to="/HighScores">High Score</Link></li>
            </ul>
        </div>
    )
}