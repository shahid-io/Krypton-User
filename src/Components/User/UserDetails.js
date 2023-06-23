import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/Constants";
import "./UserDetails.css";

const UserDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(API_URL + "/" + parseInt(id));
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    getUser();
  }, [id]);
  return (
    <div className="container main-card">
      <div className="user-details-card">
        <p>Username: {user?.username}</p>
        <p>Email: {user?.email}</p>
        <p>
          Address: {user?.address?.street}, {user?.address?.suite},{" "}
          {user?.address?.city}, {user?.address?.zipcode}
        </p>
        <p>Phone: {user?.phone}</p>
        <p>Website: {user?.website}</p>
        <p>Company: {user?.company?.name}</p>
        <p>Catchphrase: {user?.company?.catchPhrase}</p>
        <p>Business: {user?.company?.bs}</p>
      </div>
    </div>
  );
};

export default UserDetails;
