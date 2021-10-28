import React from 'react'
import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <div className='nav-wrapper'>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/ideas">Ideas</NavLink>
            <NavLink to="/add-idea">Add Idea</NavLink>
        </div>
    )
}