import React from 'react'
import {Link} from 'react-router-dom'
import {MAIN} from '../../constants/routes'

const NotFoundPage = () => {
    return (
        <div className="text-center">
            <p className="lead">Sorry, requested page not found...</p>
            <Link to={MAIN} className="nav-link">Main</Link>
        </div>
    )
};

export default NotFoundPage;