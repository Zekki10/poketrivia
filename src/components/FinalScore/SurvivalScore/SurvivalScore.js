import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import pokeContext from '../../../context/pokeContext';

import '../Scores.css'
import { HighScoreForm } from '../../HighScoreForm/HighScoreForm';

export const SurvivalScore = () => {

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
                <span>Perdiste!</span>
                <span>Tu puntaje es:</span>
                <span>{score}</span>
                <button 
                    className='button_return' 
                    onClick={handleClick}
                >
                    <Link className='score_link' to="/">Volver al menú</Link>
                </button>
            </div>
        </div>
    )
} 