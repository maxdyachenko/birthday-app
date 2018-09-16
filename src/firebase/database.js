import {database} from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  database.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () => database.ref('users').once('value');

// Other db APIs ...
