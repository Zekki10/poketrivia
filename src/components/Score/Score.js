import pokeContext from '../../context/pokeContext';
import { useContext } from 'react';
import './Score.css'

export const Score = () => {
    const { score } = useContext(pokeContext)


    return(
        <div className="score_container">
            <span>SCORE: </span>
            <span>{score}</span>
        </div>
    )
}