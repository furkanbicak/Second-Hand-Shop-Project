import React from 'react'

const DropdownButton = ({title, list}) => {

    return (
        <>
            <div className="product_title title">
                <label className="required">{title}</label>
            </div>

            <select>
                <option >{title} Seç</option>
                {list}       
            </select>
        </>
    )
}

export default DropdownButton;