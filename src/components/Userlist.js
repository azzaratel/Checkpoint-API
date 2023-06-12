import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Userlist() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUsers(res.data);
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='Container'>
      <div className='Table'>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.username}</td>
                <td>{el.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Userlist;
