import React from 'react'

import './Order.css'
import Wrapper from '../../hoc/Wrapper'
import Button from '../UI/Button/Button'

const Order =(props) => {
    const summery = Object.keys(props.products).map((p)=>{
        return (
            props.products[p] !== 0 ?
                <li key={p} className="order-item">
                {p} : {props.products[p]}
            </li> : null
        )
    })
    return (
        <Wrapper>
            <h3>Order List</h3>
            <ul className="order-items">{summery}</ul>
            <p>Total Price: {props.total}</p>
            <p>Continue ?</p>
            <Button btnType="success" click={props.continue}>
                Yes
            </Button>
            <Button btnType="danger" click={props.cancel} >
                No
            </Button>
        </Wrapper>
    )
}
export default Order