// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import "./AddTimeOff.css"
// import {useNavigate, Link} from 'react-router-dom'
// import { Card } from "react-bootstrap";

// function AddTimeOff () {
//   const [leaveType, setLeaveType] = useState('');
//   const [fromDate, setFromDate] = useState(null);
//   const [toDate, setToDate] = useState(null);
//   const [numberOfDays, setNumberOfDays] = useState(0);
//   const [remainingLeaves, setRemainingLeaves] = useState(0);
//   const [reason, setReason] = useState('');
//   const [error, setError] = useState('');

//   function handleSubmit(event) {
//     event.preventDefault();
    

//     if (!leaveType || !fromDate || !toDate || !numberOfDays || !remainingLeaves || !reason) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     setLeaveType('');
//     setFromDate(null);
//     setToDate(null);
//     setNumberOfDays(0);
//     setRemainingLeaves(0);
//     setReason('');
//     setError('');
//   }

//   function handleFromDateChange(date) {
//     setFromDate(date);
//     if (date && toDate) {
//       const days = Math.ceil((toDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
//       setNumberOfDays(days);
//     }
//   }

//   function handleToDateChange(date) {
//     setToDate(date);
//     if (date && fromDate) {
//       const days = Math.ceil((date.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24));
//       setNumberOfDays(days);
//     }
//   }

//   return (
//     <Card className="AddTimeOff">
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="leaveType">Leave Type</label>
//           <select id="leaveType" value={leaveType} onChange={(event) => setLeaveType(event.target.value)}>
//             <option value="">--Select Leave Type--</option>
//             <option value="annual">Annual Leave</option>
//             <option value="sick">Sick Leave</option>
//             <option value="bereavement">Bereavement Leave</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="datePicker">From Date</label>
//           <DatePicker id="dataPicker" selected={fromDate} onChange={handleFromDateChange}  />
//         </div>
//         <div>
//           <label htmlFor="toDate">To Date</label>
//           <DatePicker id="toDate" selected={toDate} onChange={handleToDateChange}  />
//         </div>
//         <div>
//           <label htmlFor="numberOfDays">Number of Days</label>
//           <input type="number" id="numberOfDays" value={numberOfDays} readOnly />
//         </div>
//         <div>
//           <label htmlFor="remainingLeaves">Remaining Leaves</label>
//           <input type="number" id="remainingLeaves" value={remainingLeaves} onChange={(event) => setRemainingLeaves(event.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="reason">Reason</label>
//           <textarea id="reason" value={reason} onChange={(event) => setReason(event.target.value)} />
//         </div>
//         <div className="error">{error}</div>
        
//         <button type="submit">Submit</button>
//         <Link to="/verify-email">close</Link>
        
//       </form>
//     </Card>
//   );
// }

// export default AddTimeOff;
