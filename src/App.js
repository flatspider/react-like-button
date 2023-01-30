import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        Test World!
        <button onClick={handleClick}> {count} likes </button>
      </header>
    </div>
  );
}

export default App;
