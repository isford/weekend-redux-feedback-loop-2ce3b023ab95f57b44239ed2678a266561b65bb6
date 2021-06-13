import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Comments() {

    const dispatch = useDispatch();
    const [comments, setComments] = useState('');

    const responseInfo = { comments: comments };

    let history = useHistory();

    const handleClick = () => {
        console.log(`You're going to the next page`)
        //Sending info to reducer
        dispatch({
            type: 'SET_COMMENTS',
            payload: responseInfo
        });
        //Next Page
        history.push('/review')
    }

    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <h5>Comments?</h5>
            <input type="text" placeholder="Comments"
                name="comments" onChange={(event) => setComments(event.target.value)} />
            <button onClick={handleClick}>Next</button>
        </div>
    )
}