import React, { useContext, useEffect, useState } from "react";
import { faCalendar, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faAddressBook,
  faCog,
  faGripHorizontal,
  faHome,
  faSignOutAlt,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import { UserContext } from "../../../App";
import './Sidebar.css';

const Sidebar = () => {

//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
  //   const [isAdmin, setIsAdmin] = useState(false);

  //   useEffect(() => {
  //     fetch("https://desolate-badlands-10830.herokuapp.com/adminList")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const checkAdmin = data.find(
  //           (checkingPerson) => checkingPerson.email === loggedInUser.email
  //         );
  //         setIsAdmin(checkAdmin);
  //       });
  //   }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between  py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link className="text-brand text-decoration-none" to="/myProfile">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>My Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/jobFeed" className="text-brand text-decoration-none">
            <FontAwesomeIcon icon={faHome} /> <span>Job Feed</span>
          </Link>
        </li>
        <li>
          <Link to="/createPost" className="text-brand text-decoration-none">
            <FontAwesomeIcon icon={faAccessibleIcon} />{" "}
            <span>Create Job Post</span>
          </Link>
        </li>
        {/* <li>
          <Link className="text-brand text-decoration-none" to="/addReview">
            <FontAwesomeIcon icon={faAddressBook} /> <span>Add Review</span>
          </Link>
        </li> */}

        <div>
          <li>
            <Link to="/managePost" className="text-brand text-decoration-none">
              <FontAwesomeIcon icon={faCalendar} /> <span>Manage Job Post</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/addService" className="text-brand text-decoration-none">
              <FontAwesomeIcon icon={faUsers} /> <span>Make Role</span>
            </Link>
          </li> */}
          <li>
            <Link to="/makeAdmin" className="text-brand text-decoration-none">
              <FontAwesomeIcon icon={faFileAlt} /> <span>Make Role</span>
            </Link>
          </li>
          {/* <li>
            <Link
              to="/manageService"
              className="text-brand text-decoration-none"
            >
              <FontAwesomeIcon icon={faUserPlus} /> <span>Manage Service</span>
            </Link>
          </li> */}
        </div>
        <li>
          <Link className="text-brand text-decoration-none">
            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-brand text-decoration-none">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
