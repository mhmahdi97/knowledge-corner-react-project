import React from 'react';
import './TimeSpent.css'

const TimeSpent = (props) => {
    const {readBlogs} = props;
    // console.log(blogData)
    let totalTimeSpent = 0;
    for (const blog of readBlogs) {
        totalTimeSpent = totalTimeSpent + blog.readingTime;
        // console.log(totalTimeSpent)
    }

    return (
        <div className='time-spent-container'>
            <h5>Spent time on read: {totalTimeSpent} min</h5>
        </div>
    );
};

export default TimeSpent;