import { Link } from 'react-router-dom';
import { useContext } from 'react';
import pokeContext from '../../../context/pokeContext';
import { useTranslation } from 'react-i18next'
import '../Scores.css'

export const ClassicScore = () => {
    const { t } = useTranslation(['classicScore']);
    const { score, setScore, setDefeat, rounds, setRounds, setCurrentRound } = useContext(pokeContext)

    const handleClick = () => {
        setRounds(0)
        setCurrentRound(1)
        setScore(0)
        setDefeat(false)
        sessionStorage.clear();
    }

    return (
        <div className='final_score_container'>
            <div className='container_store'>
                <span>{t('classic.completed')}</span>
                <span>{t('classic.score')}:</span>
                <span>{score + " / " + rounds }</span>
                <button 
                    className='button_return' 
                    onClick={handleClick}
                >
                    <Link className='score_link' to="/">{t('classic.back')}</Link>
                </button>
            </div>
        </div>
    )
} 
