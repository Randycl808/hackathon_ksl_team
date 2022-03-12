import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <h2><Link to="/monsters">Monsters</Link></h2>
            <h2><Link to="/jobs">Jobs for Monsters</Link></h2>
            <h2><Link to="/about">About Us</Link></h2>
        </div>
    )
}

export default Home