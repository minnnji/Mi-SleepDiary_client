import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  const { user } = props;

  return (
    <div>
      <Link to="/login">
        {user.name}
        님 Hi
      </Link>
      <Link to="/chart">
        차트로 가기
      </Link>
      <Link to="/write">
        작성하기
      </Link>
    </div>
  );
};

export default Home;
