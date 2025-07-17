import React from 'react'

function HeadingDesc({title, description}) {
  return (
    <div>
      <h2 className='text-3xl font-bold mb-4 text-primary'>{title}</h2>
      <p className='text-gray-600 text-lg'>{description}</p>
    </div>
  )
}

export default HeadingDesc