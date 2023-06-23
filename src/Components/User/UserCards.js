import { Link } from "react-router-dom";
import "./UserCards.css";
import { BsBuildingAdd } from "react-icons/bs";
import { AiOutlineLink, AiOutlineMail, AiOutlineUser } from "react-icons/ai";

const UserCards = ({ user }) => {
  return (
    <div className="user-card card">
      <h2>
        {<AiOutlineUser size={20} />} {user.name}
      </h2>
      <p>
        {<AiOutlineMail size={20} />} {user.email}
      </p>
      <p>
        {<BsBuildingAdd size={20} />} {user.company.name}
      </p>
      <p>
        {<AiOutlineLink size={20} />} {user.website}
      </p>
      <Link to={"/usersdetails/" + user.id} key={user.id}>
        <button className="btn btn-outline-success">Learn More</button>
      </Link>
    </div>
  );
};

export default UserCards;
