import { Link } from 'react-router-dom';
import { useContext } from 'react';
import pokeContext from '../../../context/pokeContext';

import '../Scores.css'

export const SurvivalScore = () => {
    const { score, setScore, setDefeat } = useContext(pokeContext)

    const handleClick = () => {
        setScore(0)
        setDefeat(false)
        sessionStorage.clear();
    }

    return (
        <div className='final_score_container'>
            <div className='survival_score container_store'>
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
