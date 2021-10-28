import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className='home-wrapper'>
            <h1>Welcome to your idea page!</h1>
            <div className="home-buttons-wrapper">
                <Link to="/ideas">See current ideas</Link>
                <Link to="/add-idea">Add your new idea</Link>
            </div>
        </div>
    )
}
