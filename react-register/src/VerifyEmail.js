import React from "react";
import   { useState } from "react";
import imgs from '../src/imgs/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import "./VerifyEmail.css";
import {
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faClock,
  faGrip,
  faUser,
  faBriefcase,
  faCalendarDays,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [showTimeOffDropdown, setShowTimeOffDropdown] = useState(false);
  const [showCareerDropdown, setShowCareerDropdown] = useState(false);

  const toggleTimeOffDropdown = () => {
    setShowTimeOffDropdown(!showTimeOffDropdown);
  };

  const toggleCareerDropdown = () => {
    setShowCareerDropdown(!showCareerDropdown);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <section className="hero">
      <section className="nav">
        <div>
      <button className="circular-button" onClick={logout}>
        Logout
      </button>
      </div>
      </section>
      <div>
      <h2 className="hello" >Welcome to the team</h2>
      </div>
      <div className="left-nav">
        <div className="ensar">
          <li>
          <img src={imgs} alt="logo.png" className="img"/>
          {/* // <img src={image} alt="ensar.png"  className="image"/> */}
          </li>
        </div>

        <ul>
          <div>
            <li>
              <a href="/Dashboard">
                <i className="fas fa-user"></i> <FontAwesomeIcon icon={faGrip} />Dashboard
              </a>
            </li>
          </div>
          <div>
            <li>
              <a href="/ProfilePage">
                <i className="fas fa-user"></i> <FontAwesomeIcon icon={faUser} />My Profile
              </a>
            </li>
          </div>
          <div>
            <li>
              <a href="#" onClick={toggleCareerDropdown}>
                <i className="fas fa-user"></i><FontAwesomeIcon icon={faBriefcase} />Career
              </a>
              <FontAwesomeIcon
                icon={showCareerDropdown ? faChevronUp : faChevronDown}
              />
            </li>
          </div>
          <div className="dropdown-container">
            <li className="dropdown-header" onClick={toggleTimeOffDropdown}>
              <div className="dropdown-header-text">
                <a href="#" onClick={toggleTimeOffDropdown}>
                  <i className="fas fa-user"></i>
                  <FontAwesomeIcon icon={faClock} /> Time Off
                </a>
                <FontAwesomeIcon
                  icon={showTimeOffDropdown ? faChevronUp : faChevronDown}
                />
              </div>
            </li>
            {showTimeOffDropdown && (
              <ul className="dropdown-list">
                <div>
                <li>
                  <div>
                  <Link to="/holiday-table">
                    <FontAwesomeIcon icon={faChevronRight} />
                    Holidays
                  </Link>
                  </div>
                </li>
                <li>
                  <div>
                  <Link to="/apply-time-off" ><FontAwesomeIcon icon={faChevronRight} />
                    Apply Time Off
                    </Link>
                    </div>
                </li>
                </div>
              </ul>
            )}
          </div>
          <div>
            <li>
              <a href="/Attendance">
                <i className="fas fa-user"></i> <FontAwesomeIcon icon={faCalendarDays} />Attendance
              </a>
            </li>
          </div>
          <div>
            <li>
              <a href="/Performance">
                <i className="fas fa-user"></i><FontAwesomeIcon icon={faUserCheck} />Performance
              </a>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default VerifyEmail;
