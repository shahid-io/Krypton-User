import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/Constants";
import "./UserDetails.css";
import { AiOutlineUser, AiOutlinePhone, AiOutlineLink } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegAddressCard } from "react-icons/fa";
import { BsBuildingAdd } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
const UserDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/user");
  };
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
        <p>
          {<AiOutlineUser color="green"/>} {user?.username}
        </p>
        <p>
          {<HiOutlineMail />} {user?.email}
        </p>
        <p>
          {<FaRegAddressCard />} {user?.address?.street}, {user?.address?.suite}
          , {user?.address?.city}, {user?.address?.zipcode}
        </p>
        <p>
          {<AiOutlinePhone />} {user?.phone}
        </p>

        {<AiOutlineLink />}
        <Link className="user-website"> {user?.website}</Link>
        <p>
          {<BsBuildingAdd />} {user?.company?.name}
        </p>
        <p>
          <strong>Catch Phrase</strong> {user?.company?.catchPhrase}
        </p>
        <p>
          <strong>Business</strong> {user?.company?.bs}
        </p>
        <button
          className="btn btn-outline-dark return-btn"
          onClick={handleReturn}
        >
          <GiReturnArrow />
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
