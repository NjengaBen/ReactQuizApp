import { useState } from 'react'
import { QuizContext } from './Helpers/Context'
import QuizMenu from './Components/QuizMenu'
import EndMenu from './Components/EndMenu'
import StartMenu from './Components/StartMenu'
import './App.css'


function App() {  
  const [gameState, setGameState] = useState("startmenu")
  const [score, setScore] = useState(0)
  return (
    <div className="App">
      <h1>New Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        { gameState === "startmenu" && <StartMenu/>}
        { gameState === "quizmenu" && <QuizMenu/>}
        { gameState === "endmenu" && <EndMenu/>}        
      </QuizContext.Provider>
    </div>
  )
}

export default App
