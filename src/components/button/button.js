import React from 'react'

const Button = ({ id, className, title, onClick }) => {
  return (
    <button 
        id          =   {id} 
        className   =   {className} 
        onClick     =   {onClick}
    > 
        { title } 
        
    </button>
  )
}

export default Button;