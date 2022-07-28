import React, { useEffect, useState } from "react";
import "./leader.css";
const LeaderBoard = ({ allVotes }) => {
  const [result, setResult] = useState({});
  useEffect(() => {
    let sortedVotes = [...allVotes];
    sortedVotes.sort((a, b) => (Number(a.points) > Number(b.points) ? -1 : 1));
    let newResult = sortedVotes.reduce((acc, val) => {
      return {
        ...acc,
        [val.option]:
          acc[val.option] !== undefined
            ? Number(acc[val.option]) + Number(val.points)
            : Number(val.points),
      };
    }, {});
    setResult(newResult);
  }, [allVotes]);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <br /><br />
      {Object.keys(result)?.map((key,index) =>{
        return(
        <ul key={index}>
          <li>
          #{index + 1} {key}
          </li>
          <li>
          {result[key]} points
          </li>

        </ul>
        )
      })}
    </div>
  );
};

export default LeaderBoard;
