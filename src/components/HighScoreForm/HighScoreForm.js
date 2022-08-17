import { useContext, useState } from 'react';
import pokeContext from '../../context/pokeContext';
import { Link } from 'react-router-dom';
import './HighScoreForm.css'
import { saveScore } from '../../utils/queryScores';


export const HighScoreForm = () => {
    const { score, setTopScore } = useContext(pokeContext)
    const [ exitButton, setExitButton ] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setTopScore(topScore => [...topScore, {name: e.target.name.value, score: score}]);
        saveScore({name: e.target.name.value, score: score})
        setExitButton(true)
    }

    return (
        <div className='highScore_container'>
            <span>High Score</span>
            <form onSubmit={handleSubmit} className='highScore_form'>
                <span>Ingresa tu nombre:</span>
                <input name='name' type='text'></input>
                <button 
                    className='button_style highScore_button' 
                    type='submit'
                >
                    OK
                </button>
                {
                    exitButton && 
                    <div className='exit_container highScore_container'>
                        <button 
                            className='button_style highScore_button' 
                            type='submit'
                        >
                            <Link className='high_link' to="/">Exit</Link>
                        </button>
                    </div>
                }
            </form>
        </div>
    )
}