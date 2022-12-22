import React, { useContext, useState } from 'react'
import { QuizContext } from '../Helpers/Context'
import { Results } from '../Helpers/DataBank'
import '../App.css'

function QuizMenu() {
    const {score, setScore, setGameState} = useContext(QuizContext)
    const [currQuestion, setCurrentQuestion] = useState(0)
    const getAnswers = [Results[currQuestion].correct_answer, ...Results[currQuestion].incorrect_answers]
    const getRandomAnswers = getAnswers.sort((a,b) => 0.5 - Math.random())    
    const answers = getRandomAnswers
    const [optionChosen, setOptionChosen] = useState(answers)  
    const nextQuiz = ()=>{
        if(optionChosen == Results[currQuestion].correct_answer){
            setScore(score + 1)
        }
        setCurrentQuestion(currQuestion + 1)
    }
    const finishQuiz = () => {
        if(optionChosen == Results[currQuestion].correct_answer){
            setScore(score + 1)
        }
        setGameState("endmenu")
    }
  return (
    <div className='quizmenu'>
        <h2>{Results[currQuestion].question}</h2>
        <div className="options">            
            {answers.map((answer, index)=>{                
                return(
                    <button onClick={()=>{setOptionChosen(answer)}} key={index}>{answer}</button>
                )                
            })}
        </div>
        <div className="next">
            {currQuestion === Results.length-1 ?
            (<button onClick={finishQuiz}>Finish</button>) :
            (<button onClick={nextQuiz}>Next</button>)
            }            
        </div>
    </div>
  )
}

export default QuizMenu