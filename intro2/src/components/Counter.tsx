import { ReactNode } from 'react';

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = ({ setCount, children }: CounterProps) => {
  return (
    <>
      <h1>Count: {children}</h1>
      <button onClick={() => setCount((prev) => prev - 1)}>minus</button>
      <button onClick={() => setCount((prev) => prev + 1)}>add</button>
    </>
  );
};

export default Counter;
