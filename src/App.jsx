import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(0);0
  // let Counter = 15;

  const addValue = () => {
    setCounter(Counter + 1);
    if (Counter == 100) {
      alert("you reached at 100 congrates🎊🎉");
    }
  };

  const removevalue = () => {
    if (Counter !== 0) {
      setCounter(Counter - 1);
    }
  };
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value : {Counter}</h2>
      <button onClick={addValue}>Add Value{Counter}</button>
      <br />
      <button onClick={removevalue}>Remove Value{Counter}</button>
    </>
  );
}

export default App;
