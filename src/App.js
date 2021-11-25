import { useState } from "react";
import Addtask from "./Addtask";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Addtask />
    </div>
  );
}

export default App;
