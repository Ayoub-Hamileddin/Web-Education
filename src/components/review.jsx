import React from 'react'

export default function Review({id,stars, img, description, name, job}) {
  return (
    <div className="rating">
      <span className='stars'>{stars}</span>
      <p className='description'>{description}</p>
      <div className="personne">
        <img src={img} alt={name} />
        <div>
          <h3 className='text-primary'>{name}</h3>
          <h4>{job}</h4>
        </div>
      </div>
    </div>
  );
}
