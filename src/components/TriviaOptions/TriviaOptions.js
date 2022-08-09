import { useContext, useEffect, useState } from 'react';
import pokeContext from '../../context/pokeContext';
import './TriviaOptions.css'

export const TriviaOptions = () => {
   
    const { 
        pokeList, 
        loading, 
        correctAnswer, 
        score, 
        setScore, 
        getPokes,
        setCorrectAnswer,
        random,
        setDefeat,
        setRounds,
        rounds,
        setEnd,
        currentRound,
        setCurrentRound 
    } = useContext(pokeContext)


    useEffect(() => {

        return (() => {
            setEnd(false)
            setScore(0)
            setCurrentRound(1)
        })

    }, [])

    const [ rightClass, setRightClass ] = useState('')
    const [ leftClass, setLeftClass ] = useState('')

    const handleClick = (bool) => {
        setRightClass('answer_right'); 
        setLeftClass('answer_wrong');
        if (bool) {
            setScore(score+1);
            sessionStorage.setItem("score", score+1);
        } else {
            setDefeat(true)
        }
        setTimeout(() => {
            setCorrectAnswer(random(0,3)) 
            getPokes();
            setLeftClass('');
            setRightClass('');
            if (currentRound != rounds) {
                setCurrentRound(currentRound + 1)
            } else {
                setEnd(true)
            } 
        }, 2000); 
        
    }
    return(
        <div className='trivia_container'>
        { pokeList.map((poke, index) => {
                if (index === correctAnswer){
                    return(
                        <img className='img_poke' key={index} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.data.id}.png`} alt="poke" />
                    )
                } else {
                    return ""
                }           
            })
        }           
            <ul className='options_list'>
            { loading ? 
            pokeList.map((poke, index) => {
                
                if (index === correctAnswer){
                    return(
                    <li className={`option_item right`} key={index}>
                        <button 
                            className={`answer_button ${rightClass}`}
                            onClick={() => handleClick(true) }    
                        >
                            {poke.data.name}

                        </button>
                    </li>
                    )
                } else {
                    return(
                        <li className='option_item wrong' key={index}>
                            <button 
                                className={`answer_button ${leftClass}`}
                                onClick={() => handleClick(false) }     
                            >
                                {poke.data.name}
                            </button>
                        </li>
                    )  
                }
            })
            : <h1>Loading</h1>

            }
            </ul>
        </div>
    )
}