import React, { useState } from 'react';
import './Performance.css';
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";


    const Performance = () => {
        const [performanceData, setPerformanceData] = useState([
            { id: 1, name: "John Doe", position: "Software Developer", rating: 4 },
            { id: 2, name: "Jane Smith", position: "Project Manager", rating: 5 },
            { id: 3, name: "Bob Johnson", position: "UX Designer", rating: 3.4 },
            { id: 4, name: "harsha", position: "Front End Developer", rating: 5 },
            { id: 5, name: "ruchi", position: "Back End Developer", rating: 4.6 },
          ]);
        
          const handleEdit = (id) => {
            // Code to handle edit performance data
          };

  return (
    <div className='suvi'>
        <nav>
        Performance Page
            <button onClick={() => window.location.href='/verify-email'}>Back</button>
        </nav>
      <h1>Welcome to your Performance Page!</h1>
      <div>
      {/* <h1>Performance Page</h1> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Position</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {performanceData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.rating}</td>
              <td>
                <Button variant="primary" onClick={() => handleEdit(employee.id)}>
                  <FontAwesomeIcon icon={faEdit} />
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
  );
}

export default  Performance;
