
import { useContext } from 'react'
import { TriviaOptions } from '../../components/TriviaOptions/TriviaOptions'
import { NavBar } from '../../components/NavBar/NavBar'
import pokeContext from '../../context/pokeContext'
import { ClassicScore } from '../../components/FinalScore/ClassicScore/ClassicScore'
import { Menu } from '../../components/Menu/Menu'

import './ClassicGame.css'
import { Footer } from '../../components/Footer/Footer'

export const ClassicGame = () => {
    const { rounds, setRounds, end } = useContext(pokeContext)

    
    const handleSubmit = (e) => {
        e.preventDefault()
        setRounds(e.target.rounds.value)
    } 

    return (
        <>
        {
            (rounds === 0 || rounds === undefined) && !end
            ? 
            <>  
                <div className='container_form'>
                    <form className='classic_form' onSubmit={handleSubmit}>
                        <span>Numero de rondas: </span>
                        <input name='rounds' type='number'></input>
                        <button type='submit' className='button_style'>Comenzar</button>
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