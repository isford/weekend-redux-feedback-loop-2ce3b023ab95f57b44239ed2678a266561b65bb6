import React from 'react'
import { useHistory } from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

export default function Feeling() {

    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');

    const responseInfo = { feeling:feeling };



    let history = useHistory();

    const handleClick = () => {
        console.log(`You're going to the next page`)
        if(feeling == 0){
            alert('Please select a value between 1 and 5');
            return;
        }else
        //Sending info to reducer
        dispatch({
            type: 'SET_FEELING',
            payload: responseInfo
        });
        //navigating to next page
        history.push('/understanding')
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>

            <h5>Feeling?</h5>
            <select name = "feeling" onChange={(event) => setFeeling(event.target.value)}>
                <option value ="0">Select a value</option>
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
