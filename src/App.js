import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const checkCount = () => {
    if (count == 1) {
      return "like";
    } else {
      return "likes";
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>
          {" "}
          {count} {checkCount()}{" "}
        </button>
      </header>
    </div>
  );
}

export default App;
