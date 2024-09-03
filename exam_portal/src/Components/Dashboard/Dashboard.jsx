import React from "react";
import "./Dashboard.css";

function Dashboard() {
  const tests = [
    "Sample Test 1",
    "Sample Test 2",
    "Sample Test 3",
    "Sample Test 4",
    "Sample Test 5",
    "Sample Test 6",
    "Sample Test 7",
    "Sample Test 8",
    "Sample Test 9",
    "Sample Test 10"
  ];

  return (
    <>
      {tests.map((test, index) => (
        <div key={index} className='list'>
          <h3>{test}</h3>
          <button>Take Test</button>
        </div>
      ))}
    </>
  );
}

export default Dashboard;
