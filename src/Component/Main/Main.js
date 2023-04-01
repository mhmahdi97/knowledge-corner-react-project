import React, { useEffect, useState } from 'react';
import './Main.css'
import Blog from '../Blog/Blog';
import TimeSpent from '../TimeSpent/TimeSpent';
import Bookmarks from '../Bookmarks/Bookmarks';

const Main = () => {
    const [blogs, setBlogs] = useState([])
    const [readBlogs, setReadBlogs] = useState([]);
    let totalTimeSpent = 0;
    const handleReadBlogs = (blogs) =>{
        const newReadBlogs = [...readBlogs, blogs] 
        setReadBlogs(newReadBlogs)
    }

    useEffect(()=>{
         fetch('blogs.json')
        .then(res => res.json())
        .then (data => setBlogs(data))
    }, [])
    
    console.log(blogs)
    return (
        <div className='main-container'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog
                    key = {blog.id}
                    blog = {blog}
                    handleReadBlogs = {handleReadBlogs}
                    ></Blog>)
                }

            </div>
            <div className='side-bar'>
                <TimeSpent
                readBlogs = {readBlogs}
                ></TimeSpent>
                <Bookmarks></Bookmarks>
            </div>
        </div>
    );
};

export default Main;