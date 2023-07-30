import React, { useState } from 'react';
import './Dashboard.css';


function Dashboard() {
  // const [selectedItem, setSelectedItem] = useState('');

  // const handleSelect = (item) => {
  //   setSelectedItem(item);
  // };

  return (
    <div className='ruchi'>
        <nav>
            Dashboard
            <button onClick={() => window.location.href='/verify-email'}>Back</button>
        </nav>
      <h1>Welcome to your Dashboard!</h1>
    </div>
  );
}

export default Dashboard;
