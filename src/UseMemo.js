import React, { useMemo, useState } from "react";
const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculate = useMemo(() => expensive(count), [count]);
  const handleClick = () => {
    setTodos([...todos, "New Todo"]);
  };
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      {todos.map((item) => {
        return <div>{item}</div>;
      })}
      <button onClick={handleClick}>Add Todos</button>

      <span>Count:{count}</span>
      <span>
        <button onClick={handleIncrement}>+</button>
        <h2>Expensive function</h2>
        {calculate}
      </span>
    </div>
  );
};
const expensive = (nums) => {
  for (let i = 0; i < 100000000; i++) {
    nums += i;
  }
  return nums;
};
export default UseMemo;
