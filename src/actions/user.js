const setUser = (user) => ({
  type: 'SET_USER',
  payload: {
    user,
  },
});

const fetchUser = () => async (dispatch) => {
  const res = await fetch('http://httpbin.org/get');
  const user = await res.json();
  dispatch(setUser(user));
};
