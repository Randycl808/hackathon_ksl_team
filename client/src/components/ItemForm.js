import React, { useState }from 'react'

const ItemForm = (props) => {
    const [name, setName ] = useState(props.name || '');
    const [price, setPrice ] = useState(props.name || '');
    const [description, setDescription ] = useState(props.name || '');

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({name})
        if(props.id){
            props.updateItem({name, id: props.id, price, description})
        } else {
            props.addItem({name})
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
                <input value={name} onChange={(e) => setPrice(e.target.value)} />
                <p>Description:</p>
                <input value={name} onChange={(e) => setDescription(e.target.value)} />
                <button>add</button>
            </form>
        </div>
    )
}

export default ItemForm