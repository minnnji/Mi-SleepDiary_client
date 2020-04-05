import React from 'react';
// import { Link } from "react-router-dom";

const Error = (error) => {
  return (
    <div>
      {error.status}
      {error.message}
    </div>
  );
};

export default Error;
