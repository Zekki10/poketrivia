import { useContext } from 'react'
import pokeContext from '../../context/pokeContext'
import { useTranslation } from 'react-i18next'


export const Rounds = (props) => {
    const { t } = useTranslation(['navbar']);
    const { rounds, currentRound } = useContext(pokeContext)
    const { mode } = props

    return (
        <>
            { (mode !== 'none') 
            &&
            <div className="score_container">
                <span>{t("navbar.round")}: </span>

                { 
                mode === "classic" 
                    ?
                    <span> {currentRound} / {rounds}</span>
                    : 
                    <span> - / ∞</span>
                }
            </div>}
        </>
    )
}