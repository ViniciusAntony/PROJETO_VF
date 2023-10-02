import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './views/About';
import Characters from './views/Characters';
import Login from './views/Login';
import Home from './views/Home';
import RegisterLogin from './views/RegisterLogin';
import CardDetails from './components/Cards/CardDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterLogin />} />
      </Routes>
    </Router>
  );
}
export default App;
