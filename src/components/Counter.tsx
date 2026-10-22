import {type ReactNode } from "react";
type CounterProps = {
  children: ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function Counter({ setCount, children }: CounterProps) {
  return (
    <>
      <div>{children}</div>
      <button
        className="px-5 py-2 bg-gray-500 text-white rounded-2xl"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
      <button
        className="px-5 py-2 bg-gray-500 text-white rounded-2xl"
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
    </>
  );
}

export default Counter;
