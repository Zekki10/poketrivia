import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import pokeContext from '../../context/pokeContext';
import { useTranslation } from 'react-i18next'
import './Menu.css'

export const Menu = () => {
    const { t } = useTranslation(['menu']);
    const { getPokes } = useContext(pokeContext)
    useEffect(() => {
        
        return( () => {
            getPokes()
            
        })
    }, [])

    return(
        <div className="home_container">
            <ul className="menu_container">
                <li className="menu_item"><Link className='menu_link' to="/Survival">{t("menu.Survival")}</Link></li>
                <li className="menu_item"><Link className='menu_link' to="/ClassicGame">{t("menu.ClassicMode")}</Link></li>
                <li className="menu_item"><Link className='menu_link' to="/Options">{t("menu.Options")}</Link></li>
                <li className="menu_item"><Link className='menu_link' to="/HighScores">{t("menu.HighScores")}</Link></li>
            </ul>
        </div>
    )
}