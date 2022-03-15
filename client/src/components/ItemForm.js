// import React functionality
import React, { useState }from 'react'


// setting a function called ItemForm
const ItemForm = (props) => {
    // setting the useState for 'name' |
    // pulling the state from the current location | if there is no name setting it to ''
    const [name, setName ] = useState(props.name || '');
    const [price, setPrice ] = useState(props.price || '');
    const [description, setDescription ] = useState(props.description || '');


    // creating a function in order to use the handleSubmit effect
    const handleSubmit = (e)=>{
        // prevents the default event from occurring
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
             {/* header for 'item form' */}
            <h1>ItemForm</h1>
             {/* header for 'Edit' and 'New' item Form based on the params id, 
             if there is an id populates data, if no id, blank form */}
            <h1>{props.id ? "EDIT" : "NEW"}</h1>
            <p>id: {props.id}</p>
            {/* telling the handleSubmit to run when the form is submitted */}
            <form onSubmit={handleSubmit}>
                <p>Name:</p>
                {/* input field for name key, saying that with the onChange 
                event it will set the Name to whatever input the user has entered */}
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