import React, { useEffect, useState } from 'react'
import Blog from './Blog'

const API_URL = 'http://localhost:8001/blog'

export default function BlogList() {
    const [blogs, setBlogs] = useState([])
    const [onChange, setOnChange] = useState(false)

    useEffect(()=>{
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[onChange])

  return (
    <div className='container bg-white text-dark p-4'>
        <h2>Blogs</h2>
        {
            blogs.length < 1 && <p className='alert alert-warning'>There are no blogs at the moment</p>
        }
        <div className='container row'>
            {
                blogs && blogs.map((blog)=>(
                    <Blog key={blog.id} id={blog.id} blog={blog} API_URL={API_URL} onChange={onChange} setOnChange={setOnChange}></Blog>
                ))
            }
        </div>
    </div>
  )
}
