import React from 'react'

export default function MenuItem({title,desc,icon,active,timing}) {
  return (
    <div style={active ? {backgroundColor:"#EA3C53",transition: "all .14s ease"} : {backgroundColor:"transparent",transition: "all .14s ease"}} className='menu-item' data-aos="fade-right" data-aos-offset="100" data-aos-delay={timing}>
      <div className='icon-div'>
       {icon}
      </div>
      <div className='desc-menu-item'>
       <h4>{title}</h4>
       <p>{desc}</p>
      </div>
    </div>
  )
}
