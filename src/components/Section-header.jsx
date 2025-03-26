import React from 'react'

export default function SectionHeader({title,description}) {
  return (
    <div className='sectionheader'>
        <span className='text-primary'>Practice advice</span>
        <h2 className='title'>{title}</h2>
        <p className='description'>{description}</p>
      
    </div>
  )
}
