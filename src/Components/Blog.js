import React from 'react'

export default function Blog(props) {
    const handleDelete = ()=>{
        fetch(`${props.API_URL}/${props.id}`,{
            method: 'DELETE'
        })

        props.setOnChange(!props.onChange)
    }
  return (
    <div className='col-md-3 mb-4'>
        <img className='img-fluid' src={props.blog.image} alt='image loading'></img>
        <h3>{props.blog.title}</h3>
        <button type="submit" className='btn btn-outline-danger' onClick={()=>handleDelete()}>Delete</button>
    </div>
  )
}
