'use client';

import { useState } from 'react';
import { useRef } from 'react';
import { data } from '../assets/data'

export const QuestionsCard = () => {

    let [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock,setLock] = useState(false);
    const [score,setScore] = useState(0);
    const [result,setResult] = useState(false);

    const Option1 = useRef(null);
    const Option2 = useRef(null);
    const Option3 = useRef(null);
    const Option4 = useRef(null);

    const option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e,ans) => {
        if(lock===false){
         if(question.ans===ans){
           e.target.classList.add("correct");
           setLock(true);
           setScore(prev=>prev+1);
          }
          else{
           e.target.classList.add("wrong");
           setLock(true);
           option_array[question.ans-1].current.classList.add("correct");
          
          }
        }
     };

     const next = () => {
        if(index === data.length-1){
            setResult(true);
            return 0;
          }
          if(lock===true){
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_array.map((option) => {
               option.current.classList.remove("wrong");
               option.current.classList.remove("correct");
               return null;
            })
          }
      };

      const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
      }

    return(
        <div className="w-[400px] h-[520px] h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md shadow-md p-5 flex flex-col gap-4">
            <div>
                <h1 className="font-bold border-b-2 p-3 text-xl text-[#facc28]">Leafy Quizes</h1>
            </div>
            <div>
            {result? <></>: <>
                <h1 className='m-atuo font-bold text-[1.2rem] text-white'>{index+1}.{question.question}</h1>
                <ul>
                   <li ref={Option1} onClick={(e)=>(checkAns(e,1))}>{question.option1}</li>
                   <li ref={Option2} onClick={(e)=>(checkAns(e,2))}>{question.option2}</li>
                   <li ref={Option3} onClick={(e)=>(checkAns(e,3))}>{question.option3}</li>
                   <li ref={Option4} onClick={(e)=>(checkAns(e,4))}>{question.option4}</li>
                </ul>
                <div className="flex flex-row justify-between font-bold p-3 border-t-2 text-md">
                    <p className='mt-3 font-bold text-[1.2rem] text-[#e6e5e1]'>{index+1} of {data.length} questions</p>
                    <button onClick={(next)}>Next</button>
                </div>
                </>}
                {result? <> <h2 className='text-white font-bold'>Your Scored {score} out of {data.length}</h2>
                <button className='mt-4' onClick={reset}>Reset</button></> : <></>}
            </div>
        </div>
    )
}