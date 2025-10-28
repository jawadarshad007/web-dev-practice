import './Quiz.css'
import {data} from '../assets/data'
import {  useState } from 'react';

const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock , setLock] = useState(false);
    let [score, setScore] = useState(0)
    let [result, setResult] = useState(false)
    let [welcome, setWelcome] = useState(true)


    const checkAns = (e,ans)=>{
      const allLists = document.querySelectorAll("li")
        if (lock === false) {
             if (question.ans === ans){
            e.target.classList.add("correct")
            setLock(true)
            setScore(pre=>pre+1 )
        }
        else{
            e.target.classList.add("wrong")
            setLock(true)  
            allLists[question.ans-1].classList.add("correct")
            
        }   
        }
       
    }

    const nextQuestion = ()=>{
       if (lock === true){
        if (index === data.length-1){
          setResult(true)
          return 0;
        }
        //  console.log(`value of index ${index}`)
         setIndex(index+1)
        setQuestion(data[index+1])
        setLock(false)

      const allLists = document.querySelectorAll("li")
        allLists.forEach((li)=>{
          li.classList.remove("correct" , "wrong")
        })
       }
    }

    const resetbtn=()=>{
      setResult(false)
      setIndex(0)
      setQuestion(data[0])
      setScore(0)
      setLock(false)
      setWelcome(true)
    }

  return (
    <div className='Container'>
    <h1>Quiz App</h1>    
       <hr />
      
       {result ? <>
       <h2>You Scored {score} out of {data.length}</h2>
       <button onClick={resetbtn}>Reset</button>
       
       </> : 
       welcome === true? <> {
        welcome ? <div className="welcomeScreen">
        <h1>Welcome to the Quiz App</h1>  
        <button onClick={()=>setWelcome(false)}>Start Quiz</button>
       </div> : null
       }</>
       :  
       <>{/* <h2>1. Which device is used for internent connection?</h2> */}
       <h2>{question.question}</h2>
       <ul>
        <li onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
        <li onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
       </ul>
         <button onClick={nextQuestion}>Next</button>
         <div className="index">{index+1} of {data.length} questions</div></>}
       
    </div>
  )
}
export default Quiz
