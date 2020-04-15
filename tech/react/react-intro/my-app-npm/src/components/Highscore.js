import React from "react";

import data from '../lib/fake_highscores';

function Highscore() {
  return (
    <div>
      <h1>Highscores</h1>
      {
        Object.values(data).map(item => (
          <User key={item.username} user={item} />
        ))
      }
    </div>
  );
}

const User = props => {
  return (
    <div>
      <h2>
        {props.user.firstName} {props.user.lastName}
      </h2>
      <p>Username: {props.user.username}</p>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {props.user.scores.map((item, i) => (
            <tr key={i}>
              <td>{item.date}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Highscore;
