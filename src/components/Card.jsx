import React from 'react'

const Card = (props) => {
  return (
    <div>
         <a href={props.elem.url} target="_blank" rel="noopener noreferrer">
          <div className='bg-black p-0.4 rounded-md'>
            <img
              className='h-40 w-full object-cover rounded'
              src={props.elem.download_url}
              alt="image" />
          </div>
          <h2 className='text-black font-bold ml-2 '>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card