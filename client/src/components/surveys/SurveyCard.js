import React from "react";

export default ({ survey }) => {
  console.log(survey);
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">{survey.title}</span>
        <p>{survey.body}</p>
        <p className="right">
          Sent on: {new Date(survey.dateSent).toLocaleDateString()}
        </p>
      </div>
      <div class="card-action">
        <a>Yes: {survey.yes}</a>
        <a>No: {survey.no}</a>
      </div>
    </div>
  );
};
