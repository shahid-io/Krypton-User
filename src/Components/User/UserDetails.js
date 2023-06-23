import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>
        Address: {user.address.street}, {user.address.suite},{" "}
        {user.address.city}, {user.address.zipcode}
      </p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>Catchphrase: {user.company.catchPhrase}</p>
      <p>Business: {user.company.bs}</p>
    </div>
  );
};

export default UserDetails;
