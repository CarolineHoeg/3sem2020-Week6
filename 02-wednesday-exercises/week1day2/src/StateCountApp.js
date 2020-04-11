import React, { useState, useEffect } from 'react';
import './App.css';

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("count", count);
    localStorage.getItem("count");
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click to increment count by 1
      </button>
      <button onClick={() => setCount(count - 1)}>
        Click to decrement count by 1
      </button>
      <button onClick={() => setCount(count + Number(props.value))}>
        Click to increment count by {props.value}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      < Counter value="5" />
    </div>
  );
}

export default App;
