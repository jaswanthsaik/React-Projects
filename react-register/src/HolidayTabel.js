import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./HolidayTabel.css";
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
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HolidayTable() {
  const navigate = useNavigate(); // use the navigate hook
  const [showTimeOffDropdown, setShowTimeOffDropdown] = useState(false);
  const [showCareerDropdown, setShowCareerDropdown] = useState(false);

  const toggleTimeOffDropdown = () => {
    setShowTimeOffDropdown(!showTimeOffDropdown);
  };

  const toggleCareerDropdown = () => {
    setShowCareerDropdown(!showCareerDropdown);
  };
  const holidays = [
    { id: 1, title: "Pongal", date: "16-Jan", day: "Monday" },
    { id: 2, title: "Republic Day", date: "26-Jan", day: "Thursday" },
    { id: 3, title: "Holi", date: "08-Mar", day: "Wednesday" },
    { id: 4,title: "Telugu New Year/Gudi Padwa",date: "22-Mar",day: "Wednesday", },
    { id: 5, title: "MayDay", date: "01-May", day: "Monday" },
    { id: 6, title: "Telangana Formation day", date: "02-June", day: "Friday" },
    { id: 7, title: "Independence day", date: "15-Aug", day: "Tuesday" },
    { id: 8, title: "Krishnashtami", date: "06-Sep", day: "Wednesday" },
    { id: 9, title: "Vinayakachavithi", date: "18-Sep", day: "Monday" },
    { id: 10, title: "Gandhi jayanthi", date: "02-Oct", day: "Monday" },
    { id: 11, title: "Vijayadashami", date: "23-Oct", day: "Monday" },
    { id: 12, title: "Christmas", date: "25-Dec", day: "Monday" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handleLogout = () => {
    navigate("/login"); // use the navigate hook to navigate to login page
  };

  const filteredHolidays = holidays.filter((holiday) =>
    holiday.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredHolidays.length / pageSize);
  const visibleHolidays = filteredHolidays.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <div className="left-nav">
        <div className="ensar">
          <li>
            <span className="special-indicator">E</span>nsar
          </li>
        </div>

        <ul>
          <div>
            <li>
              <a href="#">
                <i className="fas fa-user"></i>{" "}
                <FontAwesomeIcon icon={faGrip} />
                Dashboard
              </a>
            </li>
          </div>
          <div>
            <li>
              <a href="#">
                <i className="fas fa-user"></i>{" "}
                <FontAwesomeIcon icon={faUser} />
                My Profile
              </a>
            </li>
          </div>
          <div>
            <li>
              <a href="#" onClick={toggleCareerDropdown}>
                <i className="fas fa-user"></i>
                <FontAwesomeIcon icon={faBriefcase} />
                Career
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
                      <Link to="/apply-time-off">
                        <FontAwesomeIcon icon={faChevronRight} />
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
              <a href="#">
                <i className="fas fa-user"></i>{" "}
                <FontAwesomeIcon icon={faCalendarDays} />
                Attendance
              </a>
            </li>
          </div>
          <div>
            <li>
              <a href="#">
                <i className="fas fa-user"></i>
                <FontAwesomeIcon icon={faUserCheck} />
                Performance
              </a>
            </li>
          </div>
        </ul>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      <h2>Holidays in 2023</h2>
      <Card>
        <div className="content">
          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Holiday Date</th>
                <th>Day</th>
              </tr>
            </thead>
            <tbody>
              {visibleHolidays.map((holiday, index) => (
                <tr key={holiday.title}>
                  <td>{index + 1}</td>
                  <td>{holiday.title}</td>
                  <td>{holiday.date}</td>
                  <td>{holiday.day}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                className={`page-number ${index + 1 === currentPage ? "active" : ""
                  }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
}

export default HolidayTable;
