import React, {useContext} from 'react'
import { QuizContext } from '../Helpers/Context'
import { Results } from '../Helpers/DataBank'
import '../App.css'

function EndMenu() {
    const {score, setScore, setGameState} = useContext(QuizContext)
    const retry = () =>{
        setScore(0)
        setGameState("startmenu")
    }
  return (
    <div className='endmenu'>
        <h2>End of the Quiz</h2>
        <p>Your score is {score} out of {Results.length}</p>
        <div className="retry">
            <button onClick={retry}>Retry</button>
        </div>
    </div>
  )
}

export default EndMenu