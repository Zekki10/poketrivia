import { SwitchLanguage } from "../../components/SwitchLanguage/SwitchLanguage"
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from "../../components/Footer/Footer"
import './OptionsMenu.css'
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom"


export const OptionsMenu = () => {
    const { t } = useTranslation(['optionsMenu']);
    return(
        <>
        <NavBar mode={"none"}/>
        <div className="options_container">
            <div className="options_items">
                <SwitchLanguage />
                <Link to='/' className="back_link">{t('optionsMenu.back')}</Link>
            </div>
        </div>
        <Footer/>
        </>
    )
    
}