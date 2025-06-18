import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(15);
  // let Counter = 15;

  const addValue = () => {
    if (Counter == 100) {
      alert("you reached at 100 congrates🎊🎉");
    }
    setCounter(Counter + 1);
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
