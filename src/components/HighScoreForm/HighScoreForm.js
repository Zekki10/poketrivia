import { useContext, useState } from 'react';
import pokeContext from '../../context/pokeContext';
import { Link } from 'react-router-dom';
import { saveScore } from '../../utils/queryScores';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next'
import './HighScoreForm.css'


export const HighScoreForm = () => {
    const { t } = useTranslation(['scoreForm']);
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
            <span>{t('scoreForm.title')}</span>
            <form onSubmit={handleSubmit(onSubmit)} className='highScore_form'>
                <span>{t('scoreForm.name')}</span>
                <input name='name' type='text' {...register("name", {required: true, minLength:5, maxLength:10})}></input>
                {errors.name?.type === 'required' && <span className='error_msg'>{t('scoreForm.required')}</span>}
                {errors.name?.type === 'minLength' && <span className='error_msg'>{t('scoreForm.length')}</span>}
                {errors.name?.type === 'maxLength' && <span className='error_msg'>{t('scoreForm.length')}</span>}
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
                            <Link className='high_link' to="/">{t('scoreForm.exit')}</Link>
                        </button>
                    </div>
                }
            </form>
        </div>
    )
}