import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Success() {

    let history = useHistory();

    const goHome = () => {
        history.push('/');
    }

    return (
        <div>
            <h1>Thank you for your submission!</h1>
            <button onClick = {goHome}>Leave New Feedback</button>
        </div>
    )
}
