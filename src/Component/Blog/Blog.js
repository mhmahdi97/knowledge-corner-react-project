import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Blog.css';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {
    const {id, blogTitle, author, coverPicture, authorImg, date, readingTime} = props.blog
    // console.log()
    return (
        <div className='blog'>
            <div className='blog-img-container'>
                <img src={coverPicture} alt="" />
            </div>
            <div className='blog-info-container'>
                <div className='author-info-container'>
                    <div className='author-img-container'>
                        <img src={authorImg} alt="" />
                    </div>
                    <div className='author-title-container'>
                        <h4>{author}</h4>
                        <p>{date}</p>
                    </div>
                </div>

                <div className='reading-time-container'>
                    <p>{readingTime} min read</p> <span><FontAwesomeIcon icon={faBookmark} /></span>
                </div>
            </div>
        <h2 className='blog-title'>{blogTitle}</h2>
        <p className='hash-tag'>#beginners  #programming</p>
        <p className='mark-read'>Mark as read</p>
        </div>
    );
};

export default Blog;