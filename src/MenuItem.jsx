import React from 'react'

export default function MenuItem({title,desc,number}) {
  return (
    <div className='menu-item'>
      <div>
       <p> {number}</p>
      </div>
      <div>
       <h4>{title}</h4>
       <p>{desc}</p>
      </div>
    </div>
  )
}
