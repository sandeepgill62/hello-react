// index.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const Button = (props) => {
  return (
    // function reset() props
    // props children
    <button onClick={() => props.reset()}> {props.children}</button >
  );
};

const Application = () => {

  // useState
  const [name, setName] = useState("");

  const reset = () => {
    console.log("reset");
    setName("");
  };

  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name"
      />
      {/* pass props to child */}
      <Button reset={reset}>RESET</Button>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
