import React from 'react'

export default function Card({ id, img, title, description, color,bgColor }) {
  return <div className='card'>
    <span className="icon" style={{backgroundColor:bgColor,color:color}}>
        {img}
    </span>
    <h2 className="title">{title}</h2>
    <span className="line"></span>
    <p className="description">{description}</p>
    
  </div>;
}
