import pokeContext from '../../context/pokeContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next'
import './Score.css'

export const Score = (props) => {
    const { t } = useTranslation(['navbar']);
    const { score } = useContext(pokeContext)
    const { mode } = props

    return(
        <>
        { mode !== 'none' &&   
            <div className="score_container">
                <span>{t('navbar.score')}: </span>
                <span>{score}</span>
            </div>
        }
        </>
    )
        
}