import './Survival.css'
import {  useContext, useEffect } from 'react'
import pokeContext from '../../context/pokeContext'
import { TriviaOptions } from '../../components/TriviaOptions/TriviaOptions'
import { NavBar } from '../../components/NavBar/NavBar'
import { SurvivalScore } from '../../components/FinalScore/SurvivalScore/SurvivalScore'
import { Footer } from '../../components/Footer/Footer'

export const Survival = () => {
    const { defeat, setDefeat } = useContext(pokeContext)

    useEffect(() => {
      
        setDefeat(false)

    }, [])
    

    return (
  
        <>
            <NavBar mode={"survival"} />
            <TriviaOptions />
            {
            defeat && <SurvivalScore />
            }
            <Footer />
        </>

    )
}