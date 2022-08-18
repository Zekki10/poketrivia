import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import pokeContext from '../../../context/pokeContext';
import { useTranslation } from 'react-i18next'
import '../Scores.css'
import { HighScoreForm } from '../../HighScoreForm/HighScoreForm';

export const SurvivalScore = () => {
    const { t } = useTranslation(['survivalScore']);
    const { score, setScore, setDefeat, scoreList } = useContext(pokeContext) 
    const handleClick = () => {
        setScore(0)
        setDefeat(false)
        sessionStorage.clear();
    }
    const ifMaxScore = () => {
        let isMaxScore = false
        scoreList.map(object =>{
            if(object.score < score){
                return isMaxScore = true
            } else {
                return isMaxScore = false
            }
        });
        return isMaxScore
    }
    const [ showForm, setShowForm ] = useState((scoreList.length < 10 || ifMaxScore() ) ? true : false)



    return (
        <div className='final_score_container'>
            <div className='survival_score container_store'>
                { 
                    showForm && 
                    <HighScoreForm score={score}/>
                }
                <span>{t('survival.lost')}</span>
                <span>{t('survival.score')}</span>
                <span>{score}</span>
                <button 
                    className='button_return' 
                    onClick={handleClick}
                >
                    <Link className='score_link' to="/">{t('survival.back')}</Link>
                </button>
            </div>
        </div>
    )
} 