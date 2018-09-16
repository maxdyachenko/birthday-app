import React from 'react';
import {Link} from 'react-router-dom';

const NoBirthdays = () => (
  <p className="lead text-center">
    You haven't add dates of your friends birthdays,
    <Link to="/add" className="nav-link">
      let's make it!
    </Link>
  </p>
);

export default NoBirthdays;
