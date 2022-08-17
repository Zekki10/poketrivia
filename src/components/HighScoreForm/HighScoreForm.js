import { useContext, useState } from 'react';
import pokeContext from '../../context/pokeContext';
import { Link } from 'react-router-dom';
import { saveScore } from '../../utils/queryScores';
import { useForm } from "react-hook-form";

import './HighScoreForm.css'


export const HighScoreForm = () => {
    const { score, setTopScore } = useContext(pokeContext)
    const [ exitButton, setExitButton ] = useState(false)
    const { register, handleSubmit, formState: { errors }, } = useForm();

    
    const onSubmit = (data) => {
        setTopScore(topScore => [...topScore, {name: data.name, score: score}]);
        saveScore({name: data.name, score: score})
        setExitButton(true)
    }

    return (
        <div className='highScore_container'>
            <span>High Score</span>
            <form onSubmit={handleSubmit(onSubmit)} className='highScore_form'>
                <span>Enter your name:</span>
                <input name='name' type='text' {...register("name", {required: true, minLength:5, maxLength:10})}></input>
                {errors.name?.type === 'required' && <span className='error_msg'>The name is required</span>}
                {errors.name?.type === 'minLength' && <span className='error_msg'>Your name must be between 5 and 10 characters long</span>}
                {errors.name?.type === 'maxLength' && <span className='error_msg'>Your name must be between 5 and 10 characters long</span>}
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