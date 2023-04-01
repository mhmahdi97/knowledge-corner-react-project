import React from 'react';
import './Bookmark.css'
import BookmarkedItem from '../BookmarkedItem/BookmarkedItem';

const Bookmarks = (props) => {
    const {bookmarkedBlog} = props;
    return (
        <div className='bookmarks-container'>
            <h4>Bookmarked Blogs: {bookmarkedBlog.length}</h4>
            {
                bookmarkedBlog.map(bookmarkedItem => <BookmarkedItem
                key = {bookmarkedItem.id}
                blogTitle = {bookmarkedItem.blogTitle}
                ></BookmarkedItem>  )
            }

        </div>
    );
};

export default Bookmarks;