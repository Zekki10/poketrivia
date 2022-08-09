import { Link } from 'react-router-dom';
import { useContext } from 'react';
import pokeContext from '../../../context/pokeContext';

import '../Scores.css'

export const ClassicScore = () => {
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
                <span>Rondas terminadas</span>
                <span>Tu puntaje es:</span>
                <span>{score + " / " + rounds }</span>
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
