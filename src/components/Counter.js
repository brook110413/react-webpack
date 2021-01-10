import React, { useState, useEffect } from 'react';
import useCounter from '../hooks/useCounter';

const Counter = () => {
  // const [count, setCount] = useState(0);
  const { count, add } = useCounter(10);

  useEffect(() => {
    console.log('一般計數器');
  });

  return (
    <div>
      <div>目前一般計數器數字:{count}</div>
      <button
        onClick={() => {
          add(1);
        }}
      >
        點我加1
      </button>
    </div>
  );
};

export default Counter;
