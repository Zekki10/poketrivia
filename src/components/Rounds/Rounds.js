import { useContext } from 'react'
import pokeContext from '../../context/pokeContext'



export const Rounds = (props) => {
    
    const { rounds, currentRound } = useContext(pokeContext)
    const { mode } = props

    return (
        <div className="score_container">
            <span>ROUND: </span>

            { mode === "classic" ?
                  <span> {currentRound} / {rounds}</span>
                : <span> - / ∞</span>
            }
        </div>
    )
}