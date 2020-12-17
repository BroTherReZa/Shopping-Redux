import React from 'react'
import './Builder.css'

const Builder = (props) =>{
    return (
        <div className="builder">
            <div>{props.title}</div>
            <div>{props.price}</div>
            <button onClick={props.add}>add</button>
            <button onClick={props.remove}>remove</button>
        </div>
    )
}
export default Builder