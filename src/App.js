import { useState } from "react";
import "./App.css";
import Pin from "./component/Pin";

function App() {
  const [pinInput, setPinInput] = useState("");
  return (
    <div className="App">
      <h1>React Custom Pin Component</h1>
      <Pin length={5} maxLength={1} setPinInput={setPinInput} />
      <h2>Pin : {pinInput.length > 0 ? pinInput : "Enter Pin"}</h2>
    </div>
  );
}

export default App;
