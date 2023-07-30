import React, { useState } from 'react';
import './Attendance.css';


function Attendance() {
    const [isAttending, setIsAttending] = useState(false);

    const handleAttendance = () => {
      setIsAttending(!isAttending);
    };

  return (
    <div className='pavan'>
        <nav>
            Attendace Page
            <button onClick={() => window.location.href='/verify-email'}>Back</button>
        </nav>
      <h1>Welcome to the Ensar Solutions!</h1>
    
      <div className="attendance-page-container">
      <div className="attendance-page-content">
        <h2>Attendance Page</h2>
        <p>Are you attending to The Office?</p>
        <button onClick={handleAttendance}>
          {isAttending ? 'Mark as Not Attending' : 'Mark as Attending'}
        </button>
        <p1>{isAttending ? 'You are attending to Office' : 'You are not attending to Office'}</p1>
      </div>
    </div>
  </div>
  );
}

export default Attendance;
