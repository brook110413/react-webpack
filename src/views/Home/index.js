import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../actions/user';

const Home = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, []);

  return (
    <div>
      <h1>這裡是首頁</h1>
    </div>
  );
};

export default Home;
