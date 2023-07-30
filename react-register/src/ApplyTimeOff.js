import React, { useState } from "react";
import "./ApplyTimeOff.css";
import { Link, useNavigate } from "react-router-dom";
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
  faPlus,
  faArrowUp,
  faCircleXmark,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";

const ApplyTimeOff = () => {
  const [leaves, setLeaves] = useState([
    {
      id: 1,
      leaveType: "Vacation Leave",
      from: "2023-04-01",
      to: "2023-04-05",
      days: 5,
      reason: "Going on a family vacation",
      status: "Pending",
      approvedBy: "",
    },
    {
      id: 2,
      leaveType: "Sick Leave",
      from: "2023-04-10",
      to: "2023-04-11",
      days: 2,
      reason: "Flu",
      status: "Approved",
      approvedBy: "John Doe",
    },
    {
      id: 3,
      leaveType: "Vacation Leave",
      from: "2023-05-01",
      to: "2023-05-05",
      days: 5,
      reason: "Traveling abroad",
      status: "Pending",
      approvedBy: "",
    },
    {
      id: 4,
      leaveType: "Sick Leave",
      from: "2023-06-01",
      to: "2023-06-03",
      days: 3,
      reason: "Stomach flu",
      status: "Approved",
      approvedBy: "Jane Smith",
    },
    {
      id: 5,
      leaveType: "Personal Leave",
      from: "2023-07-01",
      to: "2023-07-03",
      days: 3,
      reason: "Attending a wedding",
      status: "Denied",
      approvedBy: "Peter Johnson",
    },
    {
      id: 6,
      leaveType: "Vacation Leave",
      from: "2023-08-01",
      to: "2023-08-02",
      days: 2,
      reason: "Visiting family",
      status: "Pending",
      approvedBy: "",
    },
    {
      id: 7,
      leaveType: "Sick Leave",
      from: "2023-09-01",
      to: "2023-09-01",
      days: 1,
      reason: "Migraine",
      status: "Approved",
      approvedBy: "John Doe",
    },
    {
      id: 8,
      leaveType: "Vacation Leave",
      from: "2023-10-01",
      to: "2023-10-05",
      days: 5,
      reason: "Going on a trip",
      status: "Pending",
      approvedBy: "",
    },
    {
      id: 9,
      leaveType: "Sick Leave",
      from: "2023-11-01",
      to: "2023-11-02",
      days: 2,
      reason: "Flu",
      status: "Approved",
      approvedBy: "Jane Smith",
    },
    {
      id: 10,
      leaveType: "Personal Leave",
      from: "2023-12-01",
      to: "2023-12-03",
      days: 3,
      reason: "Attending a conference",
      status: "Denied",
      approvedBy: "Peter Johnson",
    },
    {
      id: 11,
      leaveType: "Sick Leave",
      from: "2023-09-01",
      to: "2023-09-01",
      days: 1,
      reason: "Migraine",
      status: "Approved",
      approvedBy: "John Doe",
    },
    {
      id: 12,
      leaveType: "Vacation Leave",
      from: "2023-10-01",
      to: "2023-10-05",
      days: 5,
      reason: "Going on a trip",
      status: "Pending",
      approvedBy: "",
    },
    {
      id: 13,
      leaveType: "Sick Leave",
      from: "2023-11-01",
      to: "2023-11-02",
      days: 2,
      reason: "Flu",
      status: "Approved",
      approvedBy: "Jane Smith",
    },
    {
      id: 14,
      leaveType: "Personal Leave",
      from: "2023-12-01",
      to: "2023-12-03",
      days: 3,
      reason: "Attending a conference",
      status: "Denied",
      approvedBy: "Peter Johnson",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  

  const navigate = useNavigate(); // use the navigate hook
  const [showTimeOffDropdown, setShowTimeOffDropdown] = useState(false);
  const [showCareerDropdown, setShowCareerDropdown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Leave application submitted");
    console.log("LeaveType", leaveType);
    console.log("Start date:", startDate);
    console.log("End date:", endDate);
    console.log("Reason:", reason);
    // Here you can perform an API call to submit the leave application
  };
  const [numDays, setNumDays] = useState(0);
  const [remainingDays, setRemainingDays] = useState(0);

  const handleNumDaysChange = (e) => {
    const days = parseInt(e.target.value);
    setNumDays(days);
    if (leaveType === "Annual") {
      setRemainingDays(20 - days);
    } else if (leaveType === "Sick") {
      setRemainingDays(30 - days);
    } else {
      setRemainingDays(0);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const toggleTimeOffDropdown = () => {
    setShowTimeOffDropdown(!showTimeOffDropdown);
  };

  const toggleCareerDropdown = () => {
    setShowCareerDropdown(!showCareerDropdown);
  };

  const handleLogout = () => {
    navigate("/login"); // use the navigate hook to navigate to login page
  };

  const filteredLeaves = leaves.filter((leave) =>
    leave.leaveType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredLeaves.length / pageSize);
  const visibleLeaves = filteredLeaves.slice(
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
              <a href="/Dashboard">
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

      <div class="container">
        <h2>Time Off</h2>
        <div class="add-time-off-container">
          <a>
            <button onClick={() => setShowPopup(true)}>
              <FontAwesomeIcon icon={faPlus} />
              Add Time Off
            </button>
            {showPopup && (
              <div className="popup"  >
                <Card className="raj">
                  <form
                    onClick={(e) => e.stopPropagation()}
                    onSubmit={handleSubmit}
                  >
                    <section className="nav-top">
                      <div className="add">Add Time Off</div>
                      <div className="icon">
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          onClick={handleClosePopup}
                        />
                      </div>
                    </section>

                    <div className="leave">
                      <label htmlFor="leaveType">Leave Type*</label>
                      <select
                        id="leaveType"
                        value={leaveType}
                        onChange={(e) => setLeaveType(e.target.value)}
                        required
                      >
                        <option value=""></option>
                        <option value="Annual">Annual</option>
                        <option value="Sick">Sick</option>
                        <option value="Maternity">Maternity</option>
                        <option value="Paternity">Paternity</option>
                      </select>
                    </div>

                    <div className="leave-two">
                      <div>
                        <label htmlFor="startDate">From Date*</label>
                        <input
                          type="date"
                          id="startDate"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="endDate">To Date*</label>
                        <input
                          type="date"
                          id="endDate"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="leave-three">
                      <div>
                        <label htmlFor="numDays">Number of days*</label>
                        <input
                          type="number"
                          id="numDays"
                          value={numDays}
                          onChange={handleNumDaysChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="remainingDays">Remaining days*</label>
                        <input
                          type="number"
                          id="remainingDays"
                          value={remainingDays}
                          disabled
                        />
                      </div>

                      <div className="leave-foure">
                        <label htmlFor="reason">Leave Reason*</label>
                        <textarea
                          type="text"
                          id="reason"
                          value={reason}
                          onChange={(e) => setReason(e.target.value)}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <button type="submit">Submit</button>
                  </form>
                </Card>
              </div>
            )}
          </a>
        </div>
      </div>

      <Card>
        <div className="table-container">
          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
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
                <th>
                  Leave Type <FontAwesomeIcon icon={faArrowUp} />{" "}
                  <FontAwesomeIcon icon={faArrowDown} />{" "}
                </th>
                <th>
                  From <FontAwesomeIcon icon={faArrowUp} />{" "}
                  <FontAwesomeIcon icon={faArrowDown} />{" "}
                </th>
                <th>
                  To <FontAwesomeIcon icon={faArrowUp} />{" "}
                  <FontAwesomeIcon icon={faArrowDown} />{" "}
                </th>
                <th>
                  No of Days <FontAwesomeIcon icon={faArrowUp} />{" "}
                  <FontAwesomeIcon icon={faArrowDown} />{" "}
                </th>
                <th>
                  Reason <FontAwesomeIcon icon={faArrowUp} />{" "}
                  <FontAwesomeIcon icon={faArrowDown} />{" "}
                </th>
                <th>
                  Status <FontAwesomeIcon icon={faArrowUp} />{" "}
                  <FontAwesomeIcon icon={faArrowDown} />{" "}
                </th>
                <th>
                  Approved By <FontAwesomeIcon icon={faArrowUp} />{" "}
                  <FontAwesomeIcon icon={faArrowDown} />{" "}
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleLeaves.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.leaveType}</td>
                  <td>{leave.from}</td>
                  <td>{leave.to}</td>
                  <td>{leave.days}</td>
                  <td>{leave.reason}</td>
                  <td>{leave.status}</td>
                  <td>{leave.approvedBy}</td>
                  <td>{leave.actions}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? "active-page" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
};

export default ApplyTimeOff;