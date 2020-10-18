import React, {Fragment} from 'react'
import {Link } from 'react-router-dom'

const NotFound = () => (
    <Fragment>
        <h1>Not Found</h1>
       <Link to="/">Home</Link>
       </Fragment>
)
export default NotFound;