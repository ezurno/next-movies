import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const upCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={upCounter}>+</button>
    </div>
  );
}
