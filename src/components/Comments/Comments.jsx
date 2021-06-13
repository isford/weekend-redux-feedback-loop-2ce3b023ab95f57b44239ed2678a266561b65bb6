import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Comments() {

    const dispatch = useDispatch();
    const [response, setResponse] = useState('');

    const responseInfo = { response: `Comments for the day: ${response}` };

    let history = useHistory();

    const handleClick = () => {
        console.log(`You're going to the next page`)
        //Sending info to reducer
        dispatch({
            type: 'SET_RESPONSE',
            payload: responseInfo
        });
        //Next Page
        history.push('/review')
    }

    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <h5>Comments?</h5>
            <input type = "text" placeholder = "Comments"
                name="comments" onChange={(event) => setResponse(event.target.value)}/>
            <button onClick={handleClick}>Next</button>
        </div>
    )
}
