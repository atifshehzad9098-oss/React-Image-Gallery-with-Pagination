import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url}>
          <div className='border-4 p-2 rounded-2xl'>
            <img className='h-40 w-60 object-cover rounded-xl' src={props.elem.download_url} alt="" />
            <h2 className='font-bold mt-2'>{props.elem.author}</h2>
          </div>
        </a>
    </div>
  )
}

export default Card

