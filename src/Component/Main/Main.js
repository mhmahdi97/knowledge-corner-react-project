import React, { useEffect, useState } from 'react';
import './Main.css'
import Blog from '../Blog/Blog';
import TimeSpent from '../TimeSpent/TimeSpent';

const Main = () => {
    const [blogs, setBlogs] = useState([])
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
                    ></Blog>)
                }

            </div>
            <div className='bookmarks-container'>
                <TimeSpent></TimeSpent>
            </div>
        </div>
    );
};

export default Main;