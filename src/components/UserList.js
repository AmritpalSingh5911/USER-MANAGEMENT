import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Userlist.css';

function UserList() {
  const [users, setUsers] = useState([]);

  // Fetch users when the component mounts
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  // Delete user function
  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        // Update the state to remove the deleted user
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <h1>User List</h1>
      <Link to="/create">Create New User</Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
            <Link className='edit' to={`/edit/${user.id}`}>Edit</Link>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
