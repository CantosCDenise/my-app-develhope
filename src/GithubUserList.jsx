import React, { useState, useEffect } from 'react';
import { ShowGithubUsers } from './ShowGithubUsers';
import { Link } from 'react-router-dom';

export function GithubUserList() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(json => {
        console.log(json)

        setUsers(json)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function HandleGetUser(username){
    setUser(username)
  }
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`} onClick={() => HandleGetUser(user.login)}>
              {user.login}
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
