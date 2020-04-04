import React from 'react';
import { Link } from "react-router-dom";

const Home = (props) => {
  const { user } = props;
  console.log(user);

  return (
    <div>
      <Link to="/login">{user.name}님 Hi</Link>
    </div>
  );
};

export default Home;
