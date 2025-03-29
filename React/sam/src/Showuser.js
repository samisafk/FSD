import axios from "axios";
import React, { useState, useEffect } from "react";

const ShowUser = () => {
  const showUserApi = "http://localhost:3000/users";
  const [userData, setUserData] = useState([]);
  const callback = (res) => {
    setUserData(res.data);
  };
  const fallback = (err) => {
    console.log(err);
  };
  const getUsers = () => {
    axios
      .get(showUserApi)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  if (userData.length === 0) {
    return <h1>No User Data</h1>;
  } else {
    return (
      <div>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          {userData.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
};

export default ShowUser;