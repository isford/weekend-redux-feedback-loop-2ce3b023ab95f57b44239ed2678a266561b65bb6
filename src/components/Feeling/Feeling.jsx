import React from 'react'
import { useHistory } from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

export default function Feeling() {

    const dispatch = useDispatch();
    const [response, setResponse] = useState('');

    const responseInfo = { response:`I am feeling like a ${response}` };



    let history = useHistory();

    const handleClick = () => {
        console.log(`You're going to the next page`, response)
        //Sending info to reducer
        dispatch({
            type: 'SET_RESPONSE',
            payload: responseInfo
        });
        //navigating to next page
        history.push('/understanding')
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>

            <h5>Feeling?</h5>
            <select name = "feeling" onChange={(event) => setResponse(event.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={handleClick}>Next</button>
        </div>
    )
}
