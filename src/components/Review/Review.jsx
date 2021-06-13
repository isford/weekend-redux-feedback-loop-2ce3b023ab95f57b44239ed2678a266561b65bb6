import React from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';


export default function Review() {
    const surveyList = useSelector(store => store.surveyList);

        const dataToSend = ({
        feeling: surveyList[0].feeling,
        understanding: surveyList[1].understanding,
        support: surveyList[2].support,
        comments: surveyList[3].comments,
    })

    const handlePost = event => {
        event.preventDefault();

        console.log('Submit clicked', dataToSend)
        axios.post('/survey', dataToSend)
            .then(response => {
                console.log('Survey sent to server in POST')
            }).catch(err => {
                console.log('Error in POST', err)
            })
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
