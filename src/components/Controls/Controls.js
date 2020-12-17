import React from 'react'
import Builder from './Builder/Builder'
import './Controls.css'

const product = [
    {title:'Product 1', type:'product1', price:'20$'},
    {title:'Product 2', type:'product2', price:'30$'},
    {title:'Product 3', type:'product3', price:'40$'},
    {title:'Product 4', type:'product4', price:'50$'},
]

const Controls = (props) => {
    return(
        <div className="controls" >
            <div className="price">
                <p>Total Price: {props.total} </p>
            </div>
            {
                product.map( p => <Builder 
                    key={p.title} 
                    title={p.title} 
                    price={p.price}
                    add={()=>props.productAdd(p.type)}
                    remove={()=>props.productRemove(p.type)}
                    />)
            }
            <button className="order-btn" onClick={props.order} >order</button>
        </div>
    )
}

export default Controls