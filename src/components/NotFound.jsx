import React, {Fragment} from 'react'
import {Link } from 'react-router-dom'
import '../assets/styles/main.scss'

const NotFound = () => (
    <main className="Main">
        <h1>Not Found</h1>
       <Link to="/">Home</Link>
    </main>
)
export default NotFound;