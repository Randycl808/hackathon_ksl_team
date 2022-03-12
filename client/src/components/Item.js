import React from 'react'
import ItemForm from './ItemForm'

const Item = (props) => {
    return (
        <div className='border'>
            <h1>Item: {props.name}</h1>
            <p>id: {props.id}</p>
            <button onClick={()=> props.deleteItem(props.id)}>delete</button>
            <ItemForm updateItem={props.updateItem} id={props.id} name={props.name} />
        </div>
    )
}

export default Item