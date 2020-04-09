import React from 'react';

const Error = error => (
  <div>
    {error.status}
    {error.message}
  </div>
);

export default Error;
