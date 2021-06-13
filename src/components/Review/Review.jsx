import React from 'react';
import {useSelector} from 'react-redux';


export default function Review() {
    const surveyList = useSelector(store => store.surveyList);

    const handlePost = () =>{
        console.log('Submit clicked')
    }

    return (
        <div>
            <p>STUFF TO REVIEW</p>
            <ul>
                {surveyList.map((response, index) =>
                <li key = {index}>{response.comments}</li>
                )}
            </ul>
            <button onClick= {handlePost}>SUBMIT IT</button>
        </div>
    );
   
}
