import React, {useState} from "react";
import './Profile.css';

import image from '../src/imgs/download.jpg';

function ProfilePage() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className='harsha'>
        <nav>
            My ProfilePage
            <button onClick={() => window.location.href='/verify-email'}>Back</button>
        </nav>
      <h1>Welcome to your Profile!</h1>
    
    <div className="profile">
    <div className="profile-header">
      <img src={image} alt="download.jpg"  className="imgs"/>
      <h3>John Doe</h3>
      <p>Software Engineer</p>
    </div>
    <div className="profile-body">
      <div className="profile-picture">
      </div>
      <div className="profile-info">
        <h2>About Me</h2>
        <p>
          Hi, I'm John Doe, a software engineer with experience in ReactJS,
          NodeJS, and Python. I love building web applications that solve
          real-world problems and make people's lives easier.
        </p>
        <h2>Contact</h2>
        <ul>
          <li>Email: johndoe@example.com</li>
          <li>Phone: 123-456-7890</li>
          <li>LinkedIn: linkedin.com/in/johndoe</li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  );
}

export default ProfilePage;