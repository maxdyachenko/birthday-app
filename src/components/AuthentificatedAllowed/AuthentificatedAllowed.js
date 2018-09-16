import React from 'react';
import {Link} from 'react-router-dom';
import {LOGIN} from '../../constants/routes';

const AuthentificatedAllowed = () => (
  <div className="text-center">
    <p className="lead">Only authentificated users allowed to view this page</p>
    <Link to={LOGIN} className="nav-link">
      Login
    </Link>
  </div>
);

export default AuthentificatedAllowed;
