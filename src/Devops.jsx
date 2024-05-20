import React from 'react'
import './App.css'

const Devops = ({img,name,author,date}) => {
    return (
      <div>
          <div className='blogbox'>
               <img src={img} alt="" />
              <h3 className='name'>{name}</h3>
              <p className='author'>{author}</p>
              <p className='date'>{date}</p>
          </div>
      </div>
    )
  }

export default Devops