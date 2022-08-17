
import { useContext } from 'react'
import { TriviaOptions } from '../../components/TriviaOptions/TriviaOptions'
import { NavBar } from '../../components/NavBar/NavBar'
import pokeContext from '../../context/pokeContext'
import { ClassicScore } from '../../components/FinalScore/ClassicScore/ClassicScore'
import { Menu } from '../../components/Menu/Menu'
import { Footer } from '../../components/Footer/Footer'
import { useForm } from "react-hook-form";
import './ClassicGame.css'

export const ClassicGame = () => {
    const { rounds, setRounds, end } = useContext(pokeContext)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    
    const onSubmit = (data) => {
        console.log(data.rounds)
        setRounds(data.rounds)
    } 

    return (
        <>
        {
            (rounds === 0 || rounds === undefined) && !end
            ? 
            <>  
                <div className='container_form'>
                    <form className='classic_form' onSubmit={handleSubmit(onSubmit)}>
                        <span>Number of rounds: </span>
                        <input name='rounds' type='number' {...register("rounds", {required: true, min:5, max:151, pattern:'^[0-9]*$'})}></input>
                        {errors.rounds?.type === 'required' && <span className='error_msg'>The number of rounds is required</span>}
                        {errors.rounds?.type === 'min' && <span className='error_msg'>The rounds must be 5-151 characters in length</span>}
                        {errors.rounds?.type === 'max' && <span className='error_msg'>The rounds must be 5-151 characters in length</span>}
                        <button type='submit' className='button_style'>Start!</button>
                    </form>
                </div>
                <Menu />
            </>
            : 
            
            <> 
                <>
                    <NavBar mode={"classic"} />
                    <TriviaOptions />
                    <Footer />
                </>
            </> 
            
            
        }
        {end && 
            <ClassicScore />
        }
        </>
               
    )
}