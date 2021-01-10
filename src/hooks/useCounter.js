import { useState, useEffect } from 'react';

const useCounter = (initCount) => {
  const [count, setCount] = useState(initCount);

  const add = (added) => {
    setCount(count + added);
  };

  return { count, add };
};

export default useCounter;
