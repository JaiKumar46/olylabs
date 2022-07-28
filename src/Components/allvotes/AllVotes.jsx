import React from 'react'
import "./allvotes.css"
const AllVotes = ({ allVotes }) => {
  return (
    <div className="AllVotes">
      <h2>All Votes</h2>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Date and Time</th>
            <th>voter Name</th>
            <th>Option</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {
            allVotes.map((item,index) => {
              return (
                <tr className='tableRow' key={index}>
                  <td>{item.timestamp}</td>
                  <td>{item.voter}</td>
                  <td>{item.points}</td>
                  <td>{item.option}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllVotes