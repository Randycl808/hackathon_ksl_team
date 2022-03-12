import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Item from '../components/Item'
import ItemForm from '../components/ItemForm'


const MonsterShow = () => {
    //state for the data
    const [items, setItems] = useState ([])
    //gets the data on load
    useEffect(()=>{
        getItems()
    },[])
    const addItem = async (item)=>{
        //adds item to DATABASE
        let res = await axios.post (`/api/monsters/${params.id}/items`, item)
        //updating STATE (items)
        setItems([...items, res.data])
    }

    const updateItem = async (item)=>{
        //updates item to DATABASE
        let res = await axios.put(`/api/monsters/${params.id}/items/${item.id}`, item)
        //UI portion of update
        const updateItems = items.map(i => i.id === res.data.id ? res.data : i)
        console.log('res.data:', res.data)
        console.log(updateItems)
        setItems(updateItems)
    }
    //hook up button and pass correct data
    //uses a axios call 
    //UI

    const deleteItem = async(id)=>{
        console.log('Monster ID:', params.id)
        console.log('Item ID:', id)
        //delete from DATABASE
        let res = await axios.delete(`/api/monsters/${params.id}/items/${id}`)
        //delete from UI
        setItems(items.filter(i=> i.id !== id))
    }
    //gets treatments from DATABASE
    const getItems = async () => {
        //api call
        let res = await axios.get(`/api/monsters/${params.id}/items`)
        //store the data from axios in state (useSTATE)
        setItems(res.data)
    }

    //TODO: render
    const renderItems =()=>{
        return items.map(i => <Item deleteItem={deleteItem} key={i.id} {...i} updateItem={updateItem}/>)
    }
    const params = useParams()
    const location = useLocation()

    return (
        <div>
            <h1>MonsterShow</h1>
            <h1> Monster: {location.state.name}</h1>
            <p>ID: {params.id}</p>
            <ItemForm addItem={addItem} />
            <hr />
            {renderItems()}
            <hr />
            <p>{JSON.stringify(items)}</p>
        </div>
    )
}

export default MonsterShow