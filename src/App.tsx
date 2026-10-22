import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Sections from "./components/Sections";

function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Heading title="this is title" />
      <Sections title="this is section title">this is section</Sections>
      <Counter setCount={setCount}>count is : {count}</Counter>
    </>
  );
}

export default App;
