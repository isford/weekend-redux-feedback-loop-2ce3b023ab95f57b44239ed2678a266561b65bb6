import React from 'react';
import {useSelector} from 'react-redux';


export default function Review() {
    const surveyList = useSelector(store => store.surveyList);

    const handlePost = () =>{
        console.log('Submit clicked')
    }

    return (
        <div>
            <h1>Review Your Feedback</h1>

            {surveyList.map((response, index) =>
            <div key = {index}>
                <p>{response.feeling}</p>
                <p>{response.understanding}</p>
                <p>{response.support}</p>
                <p>{response.comments}</p>
                
                </div>
                )}
            
            <button onClick= {handlePost}>SUBMIT IT</button>
        </div>
    );
   
}
