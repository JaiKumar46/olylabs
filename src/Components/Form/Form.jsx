import React, { useState } from "react";
import "./form.css";
const Form = ({ setAllVotes, allVotes }) => {
  const allOptions = [
    "The Office",
    "Trailer Park Boys",
    "Shrek",
    "Rick And Morty",
    "Brooklyn 99",
    "Parks and Recreation",
    "F.R.I.E.N.D.S",
    "Bojack Horseman",
  ];

  const [voter, setVoter] = useState("");
  const [points, setPoints] = useState("");

  const [option, setOption] = useState("");

  let handleSumit = e => {
    e.preventDefault();
    let DateTime = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    let newData = { timestamp: DateTime, voter, points, option };
    setAllVotes([...allVotes, newData]);
    setVoter("");
    setPoints("");
    setOption("");
  };

  return (
    <div className="form">
      <h2>Voting Booth</h2>
      <br />
      <form action="" onSubmit={handleSumit}>
        <div className="form-group">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name=""
            id="Name"
            value={voter}
            onChange={e => setVoter(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Points (1-100)</label>
          <input
            type="number"
            name=""
            id="Number"
            min="1"
            max="100"
            value={points}
            onChange={e => setPoints(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Option</label>
          <select
            name=""
            id="select"
            value={option}
            required
            onChange={e => setOption(e.target.value)}
          >
            <option value="">Select</option>
            {allOptions.map((all, index) => {
              return (
                <option value={all} key={index}>
                  {all}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit">Give points!</button>
      </form>
    </div>
  );
};

export default Form;
