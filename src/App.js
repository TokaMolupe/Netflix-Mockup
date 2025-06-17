import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Front from "./pages/Front";
import Main from './pages/Main';
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Front />
    </div>
  );
}

export default App;
