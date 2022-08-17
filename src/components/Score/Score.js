import pokeContext from '../../context/pokeContext';
import { useContext } from 'react';
import './Score.css'

export const Score = (props) => {
    const { score } = useContext(pokeContext)
    const { mode } = props

    return(
        <>
        { mode !== 'none' &&   
            <div className="score_container">
                <span>SCORE: </span>
                <span>{score}</span>
            </div>
        }
        </>
    )
        
}