import React, { useState } from "react";

export default function Header() {
  const [state, setSate] = useState(0);
  const abc = () => {
    setSate(state + 1)
  }
  return (
    <div>
      <p>You clicked {state} times</p>
      <button onClick={abc}>
        Click me
      </button>
    </div>
  );
}
