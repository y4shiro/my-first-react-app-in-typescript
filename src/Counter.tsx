import React, { useState } from 'react';

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    // setValue((prevState) => prevState + 1);
    setValue(value + 1);
  };

  const decrement = () => {
    // setValue((prevState) => prevState - 1);
    setValue(value - 1);
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;
