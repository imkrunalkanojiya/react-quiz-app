import React,{useContext} from 'react'

//context api
import { QuizContext } from '../QuizContext'

const Welcome = () => {
   const {setQuizState} = useContext(QuizContext) 

  return (
    <div id='app-welcome'>
        <h3>Welcome</h3>
        <button onClick={()=>setQuizState("questions")} className='start'>Start the quiz</button>
    </div>
  )
}

export default Welcome