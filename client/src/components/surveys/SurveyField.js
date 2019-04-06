// survey field contains logic to render single label and text nput

import React from "react";

export default ({ label, input }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
