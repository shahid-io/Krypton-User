import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/Constants";
import UserCards from "./UserCards";
import "./User.css";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URL);
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container card-container">
      <h1>User List</h1>
      <div className="row">
        {users.map((user) => (
          <div className="col-lg-4" key={user.id}>
            <UserCards user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
