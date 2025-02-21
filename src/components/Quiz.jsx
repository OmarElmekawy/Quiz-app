import questions from '../questions.js'
import { useCallback, useRef, useState } from "react";
import Summary from './Summary.jsx';
import Question from './Question.jsx';


export default function Quiz () {
    
    const [userAnswers, setUserAnwers]= useState([]);
   


    const activeQuestionIndex=  userAnswers.length;

    const quizComplete = activeQuestionIndex === questions.length;

    

   const handleSelectAnswers = useCallback( function handleSelectAnswers(selectAnswer){
        setUserAnwers((prevState)=> {
            return [...prevState,selectAnswer ]
        });
    }, [])

    const handleSkipAnswer = useCallback(()=>handleSelectAnswers(null), [handleSelectAnswers])

    if(quizComplete){
        return(
            <Summary userAnswers={userAnswers}/>
        );
    }
   
    

    return (
    <div id="quiz">
       <Question 
       key={activeQuestionIndex} 
       index={activeQuestionIndex}
       onSelectAnswer={handleSelectAnswers}
       onSkipAnswer={handleSkipAnswer}
       />
    </div>
    );
    
}