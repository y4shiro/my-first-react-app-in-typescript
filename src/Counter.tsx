import React, { useEffect, useRef, useState } from 'react';

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

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
    console.log('redner was done.');
  });

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-1</button>
      <div>This Component was re-rendered {renderTimes.current} times!</div>
    </div>
  );
};

export default Counter;
