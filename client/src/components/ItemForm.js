import React, { useState }from 'react'

const ItemForm = (props) => {
    const [name, setName ] = useState(props.name || '');
    const [price, setPrice ] = useState(props.price || '');
    const [description, setDescription ] = useState(props.description || '');

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({name})
        if(props.id){
            props.updateItem({name, price, description, id: props.id})
        } else {
            props.addItem({name},)
        }
    }
        return (
        <div className='border'>
            <h1>ItemForm</h1>
            <h1>{props.id ? "EDIT" : "NEW"}</h1>
            <p>id: {props.id}</p>
            <form onSubmit={handleSubmit}>
                <p>Name:</p>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <p>Price:</p>
                <input value={price} onChange={(e) => setPrice(e.target.value)} />
                <p>Description:</p>
                <input value={description} onChange={(e) => setDescription(e.target.value)} />
                <button className="button">add</button>
            </form>
        </div>
    )
}

export default ItemForm