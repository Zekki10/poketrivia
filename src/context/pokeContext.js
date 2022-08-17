import { createContext, useState, useEffect } from 'react';
import { getScores } from '../utils/queryScores';
import { getPosts } from '../utils/pokeapi';

const pokeContext = createContext()

const PokeProvider = ({children}) => {

    const [ pokeList, setPokeList ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ correctAnswer, setCorrectAnswer ] = useState(random(0,3))
    const [ score, setScore ] = useState(parseInt(sessionStorage.getItem("score")) || 0)
    const [ defeat, setDefeat ] = useState(false)
    const [ rounds, setRounds ] = useState()
    const [ currentRound, setCurrentRound ] = useState(1)
    const [ end, setEnd ] = useState(false)
    const [ scoreList, setScoreList ] = useState([])

    const getPokes = () => {
        setPokeList([])
        setLoading(false)
        for (let i = 0; i < 4; i++) { 
            getPosts(random(1,900)).then(response => {
                if (!pokeList.includes(response)){   
                    setPokeList(pokeList => [...pokeList, response])
                } else {
                    i = i-1
                }    
            })
        }
        setLoading(true)
        
    }
    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    useEffect(() => {

        setScoreList([])
        getScores().then(response => {
            setScoreList(response)
      })
    
    }, [])
    


    const data = {
        pokeList,
        setPokeList,
        loading,
        correctAnswer,
        score,
        setScore,
        getPokes,
        setCorrectAnswer,
        random,
        defeat,
        setDefeat,
        rounds,
        setRounds,
        end,
        setEnd,
        currentRound,
        setCurrentRound,
        scoreList,
        setScoreList
    }

    return(
        <pokeContext.Provider value={data}>
            {children}
        </pokeContext.Provider>
    )

}


export default pokeContext
export { PokeProvider }