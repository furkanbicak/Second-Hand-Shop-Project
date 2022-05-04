import React from 'react'

const Input = ({ title, type, name, placeholder, onChange }) => {
  return (
    <>
        <div className = 'formGroup_title'>
            <label className = 'required'>
                { title }
            </label>
        </div>

        <input
            className       =   'form_input'
            type            =   {type} 
            name            =   {name}
            placeholder     =   {placeholder}
            onChange        =   {onChange}
        />
    </>
  )
}

export default Input;