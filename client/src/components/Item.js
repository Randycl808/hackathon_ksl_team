import React from 'react'
import ItemForm from './ItemForm'

const Item = (props) => {
    return (
        <div className='border'>
            <h1>Item: {props.name}</h1>
            <p>id: {props.id}</p>
            <p>Price: {props.price}</p>
            <p>Description: {props.description}</p>
            <button onClick={()=> props.deleteItem(props.id)}>delete</button>
            <ItemForm updateItem={props.updateItem} id={props.id} name={props.name} price={props.price} description={props.description} />
        </div>
    )
}

export default Item