import React from 'react';
import './BookmarkedItem.css'

const BookmarkedItem = (props) => {
    const {blogTitle} = props;
    
    // console.log(bookmarkedBlog)
    return (
        <div className='bookmark-title-container'>
            <h4>{blogTitle}</h4> 
        </div>
    );
};

export default BookmarkedItem;