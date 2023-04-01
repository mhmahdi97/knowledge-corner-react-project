import React from 'react';
import './Bookmark.css'

const Bookmarks = (props) => {
    const {bookmarkedBlog} = props;
    return (
        <div className='bookmarks-container'>
            <h4>Bookmarked Blogs: {bookmarkedBlog.length}</h4>
        </div>
    );
};

export default Bookmarks;