import React from 'react';
import './page.css';
import Task from './Task';

function Page() {
  return (
    <div className="page">
      <h1>Welcome to my React page!</h1>
      <p>This is a sample page designed using React and CSS.</p>
      <button className="button">Click me</button>
      <Task title="Task 1" description="This is task number 1." />
      <Task title="Task 2" description="This is task number 2." />
      <Task title="Task 3" description="This is task number 3." />
    </div>
  );
}

export default Page;
