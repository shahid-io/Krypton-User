import React from "react";
import "./UserCards.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/Constants";

const UserCards = ({ user }) => {
  return (
    <div className="user-card card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
      <p>Website: {user.website}</p>
      <button className="btn btn-outline-success">Learn More</button>
    </div>
  );
};

export default UserCards;
