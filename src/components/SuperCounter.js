import React, { useState, useEffect } from 'react';
import useCounter from '../hooks/useCounter';

const SuperCounter = () => {
  // const [count, setCount] = useState(100);
  const { count, add } = useCounter(100);

  useEffect(() => {
    console.log('超強計數器');
  });

  return (
    <div>
      <div>目前超強計數器數字:{count}</div>
      <button
        onClick={() => {
          add(10);
        }}
      >
        點我加10
      </button>
    </div>
  );
};

export default SuperCounter;
