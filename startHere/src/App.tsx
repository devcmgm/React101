import React from 'react';
import './App.css';
import AppRouter from "./AppRouter";

function App() {
  return (
    <div key={"app"} className="App">
    <AppRouter key={"router"}/>
    </div>
  );
}

export default App;
