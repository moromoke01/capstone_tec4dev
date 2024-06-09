import React, {useEffect, useState} from 'react'

function QuestionComponent() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    useEffect(()=>{
        fetchAllQuestions();
    }, []);
    
    const fetchAllQuestions = async () =>{
        try{
            const request = await fetch('https://insignify-backend.onrender.com/questions');
            const data = await request.json();
            console.log(data);
      
      setQuestions(data.question);
      console.log(data.questions);
            
        }catch(error){
            console.error('Error fetching questions:', error);
        }
    }

  return (
    <div>
       <div>
        {}
       </div>
    </div>
  )
}

export default QuestionComponent
