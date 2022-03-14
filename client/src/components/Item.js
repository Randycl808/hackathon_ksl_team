// imports React functionality
import React from 'react'
// imports ItemForm component
import ItemForm from './ItemForm'

// declaring a function called Item that is taking in (props)
const Item = (props) => {
    // what the function is returning
    return (
        // setting a div and giving it a styling called 'border'
        <div className='border'>
            {/* displays item property name in header */}
            <h1>Item: {props.name}</h1>
            {/* displays item property id in a paragraph */}
            <p>id: {props.id}</p>
            {/* displays item property price in a paragraph */}
            <p>Price: {props.price}</p>
            {/* displays item property description in a paragraph */}
            <p>Description: {props.description}</p>
            {/* creates a button that allows you to call the function deleteItem and performs the action based on the property id */}
            <button className="button"onClick={()=> props.deleteItem(props.id)}>delete</button>
            {/* an ItemForm that is using the updateItem event to listen for when the field is changed and is updating the field based on the property id, the property name, the property price, and the property description */}
            <ItemForm updateItem={props.updateItem} id={props.id} name={props.name} price={props.price} description={props.description} />
        </div>
    )
}

// exports the Item component so that it can be used in other pages and components once imported
export default Item