import React, { useEffect, useState } from 'react';
import './Main.css'
import Blog from '../Blog/Blog';
import TimeSpent from '../TimeSpent/TimeSpent';
import Bookmarks from '../Bookmarks/Bookmarks';

const Main = () => {
    const [blogs, setBlogs] = useState([])
    const [readBlogs, setReadBlogs] = useState([]);
    const [bookmarkedBlog, setBookmarkedBlog] = useState([]);
    
    const handleReadBlogs = (blogs) =>{
        const newReadBlogs = [...readBlogs, blogs] 
        setReadBlogs(newReadBlogs)
    }

    const handleBookmarkedBlog = (blogs) =>{
        const newbookmarkedBlog = [...bookmarkedBlog, blogs]
        setBookmarkedBlog(newbookmarkedBlog);
    }

    useEffect(()=>{
         fetch('blogs.json')
        .then(res => res.json())
        .then (data => setBlogs(data))
    }, [])
    
    // console.log(bookmarkedBlog)
    return (
        <div className='main-container'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog
                    key = {blog.id}
                    blog = {blog}
                    handleReadBlogs = {handleReadBlogs}
                    handleBookmarkedBlog = {handleBookmarkedBlog}
                    ></Blog>)
                }

            </div>
            <div className='side-bar'>
                <TimeSpent
                readBlogs = {readBlogs}
                ></TimeSpent>
                <Bookmarks
                bookmarkedBlog = {bookmarkedBlog}
                ></Bookmarks>
            </div>
        </div>
    );
};

export default Main;