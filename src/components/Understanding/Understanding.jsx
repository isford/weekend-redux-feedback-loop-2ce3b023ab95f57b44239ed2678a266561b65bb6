import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Understanding() {

    const dispatch = useDispatch();
    const [response, setResponse] = useState('');

    const responseInfo = { response: `My understanding is a ${response}` };

    let history = useHistory();

    const handleClick = () => {
        console.log(`You're going to the next page`)
        //Sending info to reducer
        dispatch({
            type: 'SET_RESPONSE',
            payload: responseInfo
        });
        //change location
        history.push('/supported')
    }

    return (
        <div>
            <h1>How well are you understanding the material today?</h1>

            <h5>Understanding?</h5>
            <select name="understanding" onChange={(event) => setResponse(event.target.value)}>
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
