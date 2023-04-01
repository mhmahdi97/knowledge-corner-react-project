import React, { useEffect, useState } from 'react';
import './Questions.css'

const Questions = (props) => {
    const {question, answer} = props.question;
    return (
        <div>
            <div className='question-container'>
                <h2>{question}:</h2>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default Questions;